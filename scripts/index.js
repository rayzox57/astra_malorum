document.addEventListener('DOMContentLoaded', () => {
	initAccordion();
	initInviteCode();
	initPlanets();
	setupDecInputs();
	initBooks();
	setupDirections();
	initOrgue();
	initMapFeature();
	setupMenu();
	setupModal();

	loadData();
});

const STORAGE_KEY = 'astra_tracker_save_v1';

function saveData() {
	let openAccordionIndex = -1;
	document.querySelectorAll('.accordion-header').forEach((header, index) => {
		if (header.classList.contains('active')) {
			openAccordionIndex = index;
		}
	});

	const state = {
		openAccordionIndex: openAccordionIndex,
		step0: {
			code: document.getElementById('invite-input')?.value || '',
			locked:
				document
					.getElementById('invite-input')
					?.hasAttribute('disabled') || false,
		},
		step1: selectedPlanets,
		step2: {
			d1: document.getElementById('dec-1')?.value || '',
			d2: document.getElementById('dec-2')?.value || '',
		},
		step3: [],
		step4: {
			dirState: dirState,
			lockedState: lockedState,
		},
		step5: {},
	};

	const books = document.querySelectorAll('#step3-container .book-btn');
	books.forEach((btn, index) => {
		if (btn.getAttribute('data-selected') === 'true') {
			state.step3.push(index);
		}
	});

	orgueItems.forEach((item) => {
		const el = document.getElementById(`orgue-item-${item.id}`);
		if (el && el.parentElement) {
			state.step5[item.id] = el.parentElement.id;
		}
	});

	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadData() {
	const raw = localStorage.getItem(STORAGE_KEY);
	if (!raw) return;

	try {
		const state = JSON.parse(raw);

		if (
			typeof state.openAccordionIndex === 'number' &&
			state.openAccordionIndex > -1
		) {
			const headers = document.querySelectorAll('.accordion-header');
			headers.forEach((h) => {
				h.classList.remove('active');
				if (h.nextElementSibling)
					h.nextElementSibling.classList.remove('open');
			});

			const target = headers[state.openAccordionIndex];
			if (target) {
				target.classList.add('active');
				if (target.nextElementSibling)
					target.nextElementSibling.classList.add('open');
			}
		}

		const invInput = document.getElementById('invite-input');
		const invBtn = document.getElementById('btn-invite-lock');
		if (invInput && state.step0) {
			invInput.value = state.step0.code;
			if (state.step0.locked) {
				invInput.setAttribute('disabled', 'true');
				if (invBtn) {
					invBtn.classList.add('locked');
					invBtn.textContent = '🔓';
				}
			}
		}

		if (state.step1 && Array.isArray(state.step1)) {
			selectedPlanets = [];
			const allPlanets = document.querySelectorAll('.planet-item');
			allPlanets.forEach((p) => p.classList.remove('selected'));

			state.step1.forEach((id) => {
				const el = document.getElementById(`planet-${id}`);
				if (el) {
					selectedPlanets.push(id);
					el.classList.add('selected');
				}
			});
			updatePlanetUI();
		}

		if (state.step2) {
			if (document.getElementById('dec-1'))
				document.getElementById('dec-1').value = state.step2.d1;
			if (document.getElementById('dec-2'))
				document.getElementById('dec-2').value = state.step2.d2;
			updateDec();
		}

		if (state.step3 && Array.isArray(state.step3)) {
			statueCounts = { 1: 0, 2: 0, 3: 0 };
			const books = document.querySelectorAll(
				'#step3-container .book-btn',
			);

			books.forEach((btn, index) => {
				if (state.step3.includes(index)) {
					btn.setAttribute('data-selected', 'true');
					btn.style.borderColor = 'var(--accent-green)';
					btn.style.backgroundColor = 'rgba(39, 174, 96, 0.2)';
					btn.style.color = '#fff';

					const statId = btn.getAttribute('data-statue-id');
					if (statId) updateStatueCount(statId, 1);
				}
			});
		}

		if (state.step4) {
			dirState = state.step4.dirState || [0, 1, 2];
			lockedState = state.step4.lockedState || [false, false, false];
			updateDirUI();
		}

		if (state.step5) {
			Object.keys(state.step5).forEach((itemId) => {
				const parentId = state.step5[itemId];
				const itemEl = document.getElementById(`orgue-item-${itemId}`);
				const parentEl = document.getElementById(parentId);

				if (itemEl && parentEl) {
					parentEl.appendChild(itemEl);
				}
			});
			checkSudokuLogic();
		}
	} catch (e) {
		console.error('Error loading save data', e);
	}
}

function initAccordion() {
	const headers = document.querySelectorAll('.accordion-header');

	headers.forEach((header) => {
		const content = header.nextElementSibling;
		if (content && content.classList.contains('open')) {
			header.classList.add('active');
		}

		header.addEventListener('click', () => {
			if (header.classList.contains('active')) {
				return;
			}

			const content = header.nextElementSibling;

			headers.forEach((otherHeader) => {
				if (otherHeader !== header) {
					otherHeader.classList.remove('active');
					if (otherHeader.nextElementSibling) {
						otherHeader.nextElementSibling.classList.remove('open');
					}
				}
			});

			header.classList.add('active');
			content.classList.add('open');
			saveData();
		});
	});
}

/* --- Step 0: Invite Code Logic --- */
function initInviteCode() {
	const input = document.getElementById('invite-input');
	const btn = document.getElementById('btn-invite-lock');

	if (!input || !btn) return;

	input.addEventListener('input', (e) => {
		let val = e.target.value;
		val = val.replace(/[^a-zA-Z0-9]/g, '');
		e.target.value = val.toUpperCase();
		saveData();
	});

	btn.addEventListener('click', () => {
		const isLocked = input.hasAttribute('disabled');

		if (!isLocked) {
			if (input.value.length === 0) return;

			input.setAttribute('disabled', 'true');
			btn.classList.add('locked');
			btn.textContent = '🔓';
		} else {
			input.removeAttribute('disabled');
			btn.classList.remove('locked');
			btn.textContent = '🔒';
			input.focus();
		}
		saveData();
	});
}

/* --- Step 1: Planets Logic --- */
const planets = [
	{ id: 1, name: 'Mercury', color: '#A5A5A5' },
	{ id: 2, name: 'Venus', color: '#E3BB76' },
	{ id: 3, name: 'Earth', color: '#4F86F7' },
	{ id: 4, name: 'Mars', color: '#E74C3C' },
	{ id: 5, name: 'Jupiter', color: '#D35400' },
	{ id: 6, name: 'Saturn', color: '#F1C40F' },
	{ id: 7, name: 'Uranus', color: '#76D7C4' },
	{ id: 8, name: 'Neptune', color: '#2980B9' },
];

let selectedPlanets = [];

function initPlanets() {
	const grid = document.getElementById('planet-grid');
	if (!grid) return;

	planets.forEach((p) => {
		const el = document.createElement('div');
		el.className = 'planet-item';
		el.id = `planet-${p.id}`;

		el.addEventListener('click', () => togglePlanet(p.id));

		el.innerHTML = `
            <div class="planet-img" style="background: radial-gradient(circle at 30% 30%, ${p.color}, #111);"></div>
            <div class="planet-name">${p.name}</div>
            <div class="order-badge" id="badge-${p.id}"></div>
        `;
		grid.appendChild(el);
	});
}

function togglePlanet(id) {
	const idx = selectedPlanets.indexOf(id);
	const el = document.getElementById(`planet-${id}`);

	if (idx > -1) {
		selectedPlanets.splice(idx, 1);
		el.classList.remove('selected');
	} else {
		if (selectedPlanets.length < 3) {
			selectedPlanets.push(id);
			el.classList.add('selected');
		}
	}

	updatePlanetUI();
	saveData();
}

function updatePlanetUI() {
	planets.forEach((p) => {
		const el = document.getElementById(`planet-${p.id}`);
		const badge = document.getElementById(`badge-${p.id}`);
		const idx = selectedPlanets.indexOf(p.id);

		if (idx > -1) {
			badge.textContent = idx + 1;
		} else {
			badge.textContent = '';
		}

		if (selectedPlanets.length >= 3 && idx === -1) {
			el.classList.add('disabled');
		} else {
			el.classList.remove('disabled');
		}
	});

	const resBox = document.getElementById('planet-result');
	if (selectedPlanets.length === 3) {
		resBox.textContent = selectedPlanets.join('');
		resBox.style.color = 'var(--accent-green-hover)';
		resBox.style.borderColor = 'var(--accent-green)';
	} else {
		resBox.textContent = '---';
		resBox.style.color = 'var(--accent-blue-hover)';
		resBox.style.borderColor = 'var(--accent-blue)';
	}
}

/* --- Step 2: Dec Logic --- */
function setupDecInputs() {
	const d1 = document.getElementById('dec-1');
	const d2 = document.getElementById('dec-2');
	if (d1 && d2) {
		d1.addEventListener('input', updateDec);
		d2.addEventListener('input', updateDec);
	}
}

function updateDec() {
	const v1 = document.getElementById('dec-1').value;
	const v2 = document.getElementById('dec-2').value;
	const finalInput = document.getElementById('dec-final');

	let s1 = v1 === '' ? '00' : parseInt(v1);
	let s2 = v2 === '' ? '00' : parseInt(v2);

	if (s1 < 10 && v1 !== '') s1 = '0' + parseInt(s1);
	if (s2 < 10 && v2 !== '') s2 = '0' + parseInt(s2);

	if (v1 === '') s1 = '00';
	if (v2 === '') s2 = '00';

	if (parseInt(s1) > 99) s1 = '99';
	if (parseInt(s2) > 99) s2 = '99';

	finalInput.value = `${s1}${s2}`;
	saveData();
}

/* --- Step 3: Books Logic --- */
const bookData = [
	{ title: 'The Musica Universalis', statueId: 1 },
	{ title: 'The Black Veil', statueId: 1 },
	{ title: 'The Moon Directive', statueId: 1 },
	{ title: 'Ashes & Bone', statueId: 2 },
	{ title: 'Echoes of Andromeda', statueId: 2 },
	{ title: 'The Unknowable Void', statueId: 2 },
	{ title: 'WitchLight Codex', statueId: 3 },
	{ title: 'Silence of Singularity', statueId: 3 },
	{ title: 'Pyramids of cydonia', statueId: 3 },
];

let statueCounts = { 1: 0, 2: 0, 3: 0 };

function initBooks() {
	const accordions = document.querySelectorAll('.accordion-item');
	if (accordions.length < 4) return;

	const container = accordions[3].querySelector('.content-padding');
	if (!container) return;

	container.innerHTML = '';

	container.id = 'step3-container';

	const booksGrid = document.createElement('div');
	booksGrid.style.cssText =
		'display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; width: 100%;';

	bookData.forEach((book, index) => {
		const btn = document.createElement('div');
		btn.textContent = book.title.toUpperCase();
		btn.setAttribute('data-selected', 'false');
		btn.setAttribute('data-statue-id', book.statueId);
		btn.classList.add('book-btn');

		btn.style.cssText =
			'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); padding: 8px 10px; border-radius: 4px; cursor: pointer; font-size: 10px; color: #ccc; transition: all 0.2s; text-align: center; flex: 1 1 30%; display: flex; align-items: center; justify-content: center; min-width: 120px;';

		btn.onmouseover = () => {
			if (btn.getAttribute('data-selected') === 'false') {
				btn.style.background = 'rgba(255,255,255,0.15)';
			}
		};
		btn.onmouseout = () => {
			if (btn.getAttribute('data-selected') === 'false') {
				btn.style.background = 'rgba(255,255,255,0.05)';
			}
		};

		btn.addEventListener('click', () => {
			const isSelected = btn.getAttribute('data-selected') === 'true';

			if (!isSelected) {
				btn.setAttribute('data-selected', 'true');
				btn.style.borderColor = 'var(--accent-green)';
				btn.style.backgroundColor = 'rgba(39, 174, 96, 0.2)';
				btn.style.color = '#fff';
				updateStatueCount(book.statueId, 1);
			} else {
				btn.setAttribute('data-selected', 'false');
				btn.style.borderColor = 'rgba(255,255,255,0.15)';
				btn.style.backgroundColor = 'rgba(255,255,255,0.05)';
				btn.style.color = '#ccc';
				updateStatueCount(book.statueId, -1);
			}
			saveData();
		});

		booksGrid.appendChild(btn);
	});

	container.appendChild(booksGrid);

	const statuesWrapper = document.createElement('div');
	statuesWrapper.style.cssText =
		'display: flex; gap: 15px; justify-content: space-around; width: 100%; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;';

	for (let i = 1; i <= 3; i++) {
		const statBox = document.createElement('div');
		statBox.style.cssText =
			'display: flex; flex-direction: column; align-items: center; gap: 5px;';

		const label = document.createElement('span');
		label.textContent = `STATUE ${i}`;
		label.style.cssText =
			'font-size: 10px; color: #888; letter-spacing: 1px; font-weight: bold;';

		const count = document.createElement('div');
		count.id = `statue-count-${i}`;
		count.textContent = '0';
		count.style.cssText =
			'font-size: 20px; font-weight: bold; color: var(--accent-blue); background: rgba(0,0,0,0.3); padding: 5px 15px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); min-width: 50px; text-align: center;';

		statBox.appendChild(label);
		statBox.appendChild(count);
		statuesWrapper.appendChild(statBox);
	}

	container.appendChild(statuesWrapper);
}

function updateStatueCount(id, change) {
	statueCounts[id] += change;
	if (statueCounts[id] < 0) statueCounts[id] = 0;

	const el = document.getElementById(`statue-count-${id}`);
	if (el) {
		el.textContent = statueCounts[id];
		el.style.transform = 'scale(1.2)';
		el.style.color = 'var(--accent-green-hover)';
		setTimeout(() => {
			el.style.transform = 'scale(1)';
			el.style.color = 'var(--accent-blue)';
		}, 150);
	}
}

/* --- Step 4: Directions Logic --- */
const directions = ['NW', 'SW', 'NE'];
let dirState = [0, 1, 2];
let lockedState = [false, false, false];

function setupDirections() {
	for (let i = 1; i <= 3; i++) {
		document.getElementById(`btn-dir-${i}-prev`).onclick = () =>
			cycleDir(i, -1);
		document.getElementById(`btn-dir-${i}-next`).onclick = () =>
			cycleDir(i, 1);
		document.getElementById(`btn-dir-${i}-lock`).onclick = () =>
			toggleLock(i);
	}

	const planetLabels = [
		{ text: 'MARS', color: '#e74c3c', img: 'mars' },
		{ text: 'SATURN', color: '#f1c40f', img: 'saturn' },
		{ text: 'NEPTUNE', color: '#3498db', img: 'neptune' },
	];

	for (let i = 1; i <= 3; i++) {
		const box = document.getElementById(`dir-box-${i}`);
		const parent = box.parentElement;
		const l = planetLabels[i - 1];

		if (!parent.querySelector('.step4-label-img')) {
			const img = document.createElement('img');
			img.src = `public/imgs/dirs/${l.img}.png`;
			img.className = 'step4-label-img';
			parent.insertBefore(img, box);
		}

		if (!parent.querySelector('.step4-label')) {
			const label = document.createElement('div');
			label.className = 'step4-label';
			label.style.color = l.color;
			label.style.fontWeight = 'bold';
			label.style.fontSize = '12px';
			label.style.marginBottom = '5px';
			label.textContent = l.text;
			parent.insertBefore(label, box);
		}

		if (!box.querySelector('.inner-dir')) {
			const inner = document.createElement('div');
			inner.className = 'step4-label inner-dir';
			box.appendChild(inner);
		}
	}
	updateDirUI();
}

function toggleLock(boxId) {
	const idx = boxId - 1;
	lockedState[idx] = !lockedState[idx];
	updateDirUI();
	saveData();
}

function cycleDir(boxId, change) {
	const idx = boxId - 1;

	if (lockedState[idx]) return;

	const myCurrentVal = dirState[idx];

	let attempt = 1;
	let nextVal = myCurrentVal;

	while (attempt <= 2) {
		nextVal = nextVal + change;
		if (nextVal > 2) nextVal = 0;
		if (nextVal < 0) nextVal = 2;

		const ownerIdx = dirState.findIndex((val) => val === nextVal);

		if (lockedState[ownerIdx]) {
			attempt++;
		} else {
			dirState[ownerIdx] = myCurrentVal;

			dirState[idx] = nextVal;

			updateDirUI();
			saveData();
			return;
		}
	}
}

function updateDirUI() {
	for (let i = 0; i < 3; i++) {
		const boxId = i + 1;
		const box = document.getElementById(`dir-box-${boxId}`);
		const valIndex = dirState[i];
		const textVal = directions[valIndex];

		const innerLabel = box.querySelector('.inner-dir');
		if (innerLabel) innerLabel.textContent = textVal;
		box.setAttribute('data-val', textVal);

		const btnLock = document.getElementById(`btn-dir-${boxId}-lock`);
		const btnPrev = document.getElementById(`btn-dir-${boxId}-prev`);
		const btnNext = document.getElementById(`btn-dir-${boxId}-next`);

		if (lockedState[i]) {
			btnLock.textContent = '🔒';
			btnLock.classList.add('locked');
			btnPrev.style.opacity = '0.3';
			btnPrev.style.cursor = 'not-allowed';
			btnNext.style.opacity = '0.3';
			btnNext.style.cursor = 'not-allowed';
		} else {
			btnLock.textContent = '🔓';
			btnLock.classList.remove('locked');
			btnPrev.style.opacity = '1';
			btnPrev.style.cursor = 'pointer';
			btnNext.style.opacity = '1';
			btnNext.style.cursor = 'pointer';
		}
	}
}

/* --- Step 5: Orgue Drag Drop & Logic --- */
const orgueItems = [
	{ id: 1, name: '1', src: 'public/imgs/symbols/1.png' },
	{ id: 2, name: '2', src: 'public/imgs/symbols/2.png' },
	{ id: 3, name: '3', src: 'public/imgs/symbols/3.png' },
	{ id: 4, name: '4', src: 'public/imgs/symbols/4.png' },
	{ id: 5, name: '5', src: 'public/imgs/symbols/5.png' },
	{ id: 6, name: '6', src: 'public/imgs/symbols/6.png' },
];

let touchDragItem = null;
let touchDragGhost = null;

function initOrgue() {
	const pool = document.getElementById('orgue-pool');
	if (!pool) return;
	pool.innerHTML = '';

	document.querySelectorAll('.orgue-slot').forEach((s) => (s.innerHTML = ''));

	orgueItems.forEach((itemData) => {
		const item = document.createElement('div');
		item.className = 'orgue-item';
		item.id = `orgue-item-${itemData.id}`;
		item.draggable = true;

		item.style.backgroundColor = 'transparent';
		item.style.border = 'none';

		item.innerHTML = `
            <img 
                src="${itemData.src}" 
                alt="${itemData.name}" 
                style="width: 100%; height: 100%; object-fit: contain; pointer-events: none; display: block;"
            >
        `;

		item.addEventListener('dragstart', dragStart);

		item.addEventListener('touchstart', onTouchStart, { passive: false });
		item.addEventListener('touchmove', onTouchMove, { passive: false });
		item.addEventListener('touchend', onTouchEnd);

		pool.appendChild(item);
	});

	const slots = document.querySelectorAll('.orgue-slot, .orgue-pool');
	slots.forEach((slot) => {
		slot.removeEventListener('dragover', dragOver);
		slot.removeEventListener('drop', drop);
		slot.addEventListener('dragover', dragOver);
		slot.addEventListener('drop', drop);
	});

	const btnReset = document.getElementById('btn-reset-orgue');
	if (btnReset) {
		const newBtn = btnReset.cloneNode(true);
		btnReset.parentNode.replaceChild(newBtn, btnReset);
		newBtn.addEventListener('click', () => {
			initOrgue();
			saveData();
		});
	}
}

function dragStart(e) {
	e.dataTransfer.setData('text/plain', e.target.id);
	e.dataTransfer.effectAllowed = 'move';
}

function dragOver(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
}

function drop(e) {
	e.preventDefault();
	const id = e.dataTransfer.getData('text/plain');
	const el = document.getElementById(id);
	if (!el) return;
	finalizeDrop(el, e.target);
}

function onTouchStart(e) {
	if (e.target.closest('.orgue-item')) {
		e.preventDefault();
		touchDragItem = e.target.closest('.orgue-item');
		touchDragGhost = touchDragItem.cloneNode(true);
		Object.assign(touchDragGhost.style, {
			position: 'fixed',
			pointerEvents: 'none',
			zIndex: '9999',
			opacity: '0.8',
			width: touchDragItem.offsetWidth + 'px',
			height: touchDragItem.offsetHeight + 'px',
			top: '0',
			left: '0',
		});
		const touch = e.touches[0];
		updateGhost(touch);
		document.body.appendChild(touchDragGhost);
	}
}

function onTouchMove(e) {
	if (touchDragItem && touchDragGhost) {
		e.preventDefault();
		updateGhost(e.touches[0]);
	}
}

function onTouchEnd(e) {
	if (touchDragItem) {
		e.preventDefault();
		if (touchDragGhost) {
			touchDragGhost.remove();
			touchDragGhost = null;
		}
		const touch = e.changedTouches[0];
		const target = document.elementFromPoint(touch.clientX, touch.clientY);
		if (target) {
			finalizeDrop(touchDragItem, target);
		}
		touchDragItem = null;
	}
}

function updateGhost(touch) {
	touchDragGhost.style.transform = `translate(${touch.clientX - touchDragGhost.offsetWidth / 2}px, ${touch.clientY - touchDragGhost.offsetHeight / 2}px)`;
}

function finalizeDrop(item, initialTarget) {
	let target = initialTarget;
	if (target.tagName === 'IMG') {
		target = target.parentElement;
	}
	if (target.classList.contains('orgue-item')) {
		target = target.parentElement;
	}

	if (
		target.classList.contains('orgue-slot') ||
		target.classList.contains('orgue-pool')
	) {
		const source = item.parentElement;
		if (
			target.classList.contains('orgue-slot') &&
			target.children.length > 0
		) {
			const existing = target.firstElementChild;
			if (source && existing !== item) {
				source.appendChild(existing);
			}
		}
		target.appendChild(item);

		checkSudokuLogic();
		saveData();
	}
}

function checkSudokuLogic() {
	const mysteryItem = document.getElementById('orgue-item-6');
	if (!mysteryItem) return;

	const parent = mysteryItem.parentElement;
	const isMysteryInSlot = parent.classList.contains('orgue-slot');

	if (!isMysteryInSlot) return;

	const pool = document.getElementById('orgue-pool');
	const itemsInPool = Array.from(pool.children);

	const realItemsInPool = itemsInPool.filter((el) => {
		const id = parseInt(el.id.replace('orgue-item-', ''));
		return id >= 1 && id <= 5;
	});

	if (realItemsInPool.length === 1) {
		const missingItem = realItemsInPool[0];

		parent.appendChild(missingItem);
		pool.appendChild(mysteryItem);

		missingItem.style.animation = 'pulse 0.5s';
		setTimeout(() => (missingItem.style.animation = ''), 500);
		saveData();
	}
}

/* --- Step 5: Map Logic --- */
const mapConfig = {
	gradientStart: { r: 231, g: 76, b: 60 },
	gradientEnd: { r: 46, g: 204, b: 113 },

	curveAmplitude: 120,
	borderWidth: 5,
	borderColor: '#000000',
};

const mapCoordinates = {
	1: { x: 260, y: 722 },
	2: { x: 260, y: 368 },
	3: { x: 805, y: 284 },
	4: { x: 805, y: 75 },
	5: { x: 805, y: 1010 },
};

let mapAnimFrame = null;

function getGradientColor(t) {
	const start = mapConfig.gradientStart;
	const end = mapConfig.gradientEnd;

	const r = Math.round(start.r + (end.r - start.r) * t);
	const g = Math.round(start.g + (end.g - start.g) * t);
	const b = Math.round(start.b + (end.b - start.b) * t);

	return `rgb(${r}, ${g}, ${b})`;
}

function initMapFeature() {
	const btnShow = document.getElementById('btn-show-map');
	const btnClose = document.getElementById('btn-map-close');
	const overlay = document.getElementById('map-modal-overlay');

	if (btnShow) {
		const newBtn = btnShow.cloneNode(true);
		btnShow.parentNode.replaceChild(newBtn, btnShow);

		newBtn.addEventListener('click', () => {
			overlay.style.display = 'flex';
			setTimeout(() => overlay.classList.add('show'), 10);
			startMapAnimation();
		});
	}

	if (btnClose) {
		btnClose.addEventListener('click', () => {
			overlay.classList.remove('show');
			setTimeout(() => {
				overlay.style.display = 'none';
				stopMapAnimation();
			}, 300);
		});
	}
}

function stopMapAnimation() {
	if (mapAnimFrame) cancelAnimationFrame(mapAnimFrame);
}

function startMapAnimation() {
	const canvas = document.getElementById('map-canvas');
	const img = document.getElementById('map-image');
	const ctx = canvas.getContext('2d');

	if (!img.width || !img.height) {
		mapAnimFrame = requestAnimationFrame(startMapAnimation);
		return;
	}

	canvas.width = img.width;
	canvas.height = img.height;
	const scale = img.width / 1080;

	const sequence = [];
	for (let i = 1; i <= 5; i++) {
		const slot = document.getElementById(`slot-${i}`);
		if (slot && slot.children.length > 0) {
			const itemId = slot.firstElementChild.id.replace('orgue-item-', '');
			sequence.push(parseInt(itemId));
		}
	}

	let offset = 0;
	const boxSize = 40 * scale;
	const arrowPadding = boxSize / 2 + 5 * scale;

	const baseLineWidth = 4 * scale;
	const outlineWidth = baseLineWidth + mapConfig.borderWidth * scale;

	const render = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const totalSegments = Math.max(1, sequence.length - 1);
		const totalPoints = Math.max(1, sequence.length - 1);

		if (sequence.length >= 2) {
			for (let i = 0; i < sequence.length - 1; i++) {
				const startObj = mapCoordinates[sequence[i]];
				const endObj = mapCoordinates[sequence[i + 1]];

				if (!startObj || !endObj) continue;

				const cx1 = startObj.x * scale;
				const cy1 = startObj.y * scale;
				const cx2 = endObj.x * scale;
				const cy2 = endObj.y * scale;

				const dx = cx2 - cx1;
				const dy = cy2 - cy1;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < 10 * scale) continue;

				const midX = (cx1 + cx2) / 2;
				const midY = (cy1 + cy2) / 2;

				const ux = dx / dist;
				const uy = dy / dist;

				const normalX = -uy;
				const normalY = ux;

				const curveAmount = mapConfig.curveAmplitude * scale;

				const cpX = midX + normalX * curveAmount;
				const cpY = midY + normalY * curveAmount;

				const angleStart = Math.atan2(cpY - cy1, cpX - cx1);
				const startX = cx1 + Math.cos(angleStart) * arrowPadding;
				const startY = cy1 + Math.sin(angleStart) * arrowPadding;

				const targetAngle = Math.atan2(cpY - cy2, cpX - cx2);
				const endX = cx2 + Math.cos(targetAngle) * arrowPadding;
				const endY = cy2 + Math.sin(targetAngle) * arrowPadding;

				const tStart = i / totalSegments;
				const tEnd = (i + 1) / totalSegments;
				const colorStart = getGradientColor(tStart);
				const colorEnd = getGradientColor(tEnd);

				const gradient = ctx.createLinearGradient(
					startX,
					startY,
					endX,
					endY,
				);
				gradient.addColorStop(0, colorStart);
				gradient.addColorStop(1, colorEnd);

				ctx.beginPath();
				ctx.moveTo(startX, startY);
				ctx.quadraticCurveTo(cpX, cpY, endX, endY);

				ctx.setLineDash([]);
				ctx.lineWidth = outlineWidth;
				ctx.strokeStyle = mapConfig.borderColor;
				ctx.stroke();

				ctx.setLineDash([15 * scale, 10 * scale]);
				ctx.lineDashOffset = -offset;
				ctx.lineWidth = baseLineWidth;
				ctx.strokeStyle = gradient;
				ctx.stroke();

				ctx.setLineDash([]);
				drawCurvedArrowHead(ctx, cpX, cpY, endX, endY, scale, colorEnd);
			}
		}

		sequence.forEach((id, index) => {
			const pt = mapCoordinates[id];
			if (!pt) return;

			const cx = pt.x * scale;
			const cy = pt.y * scale;

			const t = index / totalPoints;
			const markerColor = getGradientColor(t);
			const boxX = cx - boxSize / 2;
			const boxY = cy - boxSize / 2;

			ctx.fillStyle = 'rgba(20, 20, 20, 0.9)';
			ctx.fillRect(boxX, boxY, boxSize, boxSize);

			ctx.lineWidth = (mapConfig.borderWidth + 2) * scale;
			ctx.strokeStyle = mapConfig.borderColor;
			ctx.strokeRect(boxX, boxY, boxSize, boxSize);

			ctx.lineWidth = 2 * scale;
			ctx.strokeStyle = markerColor;
			ctx.strokeRect(boxX, boxY, boxSize, boxSize);

			ctx.font = `bold ${20 * scale}px Arial`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			const textY = cy + 2 * scale;

			ctx.lineWidth = 4 * scale;
			ctx.strokeStyle = mapConfig.borderColor;
			ctx.strokeText(index + 1, cx, textY);

			ctx.fillStyle = '#fff';
			ctx.fillText(index + 1, cx, textY);
		});

		offset += 0.5 * scale;
		mapAnimFrame = requestAnimationFrame(render);
	};

	render();
}

function drawCurvedArrowHead(ctx, cpX, cpY, endX, endY, scale, color) {
	const headLength = 15 * scale;
	const dx = endX - cpX;
	const dy = endY - cpY;
	const angle = Math.atan2(dy, dx);

	ctx.beginPath();
	ctx.moveTo(endX, endY);
	ctx.lineTo(
		endX - headLength * Math.cos(angle - Math.PI / 6),
		endY - headLength * Math.sin(angle - Math.PI / 6),
	);
	ctx.lineTo(
		endX - headLength * Math.cos(angle + Math.PI / 6),
		endY - headLength * Math.sin(angle + Math.PI / 6),
	);
	ctx.lineTo(endX, endY);
	ctx.closePath();

	ctx.fillStyle = color;
	ctx.fill();

	ctx.lineWidth = (mapConfig.borderWidth / 2) * scale;
	ctx.strokeStyle = mapConfig.borderColor;
	ctx.stroke();
}

function setupMenu() {
	const btnMenu = document.getElementById('menu-toggle-btn');
	if (btnMenu) {
		btnMenu.addEventListener('click', () => {
			const menu = document.getElementById('bottom-menu');
			menu.classList.toggle('open');
			btnMenu.textContent = menu.classList.contains('open')
				? 'Close Menu ▼'
				: 'Options Menu ▲';
		});
	}

	document
		.getElementById('btn-credits')
		.addEventListener('click', () => showModal('Credits'));
	document
		.getElementById('btn-reset-all')
		.addEventListener('click', () => showModal('Reset', true));
}

function setupModal() {
	const btnClose = document.getElementById('btn-modal-close');
	if (btnClose) btnClose.addEventListener('click', closeModal);
}

function showModal(type, noclose = false) {
	const modal = document.getElementById('modal-overlay');
	const title = document.getElementById('modal-title');
	const content = document.getElementById('modal-content');

	const closeBtn = document.getElementById('btn-modal-close');
	if (noclose) {
		closeBtn.style.display = 'none';
	} else {
		closeBtn.style.display = 'unset';
	}

	modal.style.display = 'flex';
	void modal.offsetWidth;
	modal.classList.add('show');

	if (type === 'Credits') {
		title.textContent = 'Crédits';
		content.innerHTML = `
<div class="modal-text"
                style="display: flex; flex-direction: column; gap: 10px; align-items: center; margin-bottom: 25px;">

                <div
                    style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">Tool Made by</span>
                    <span style="color: #fff; font-weight: 700;">Rayzox57</span>
                </div>

                <div
                    style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">Assisted by</span>
                    <span style="color: #fff; font-weight: 700;">Gemini Pro</span>
                </div>

				<div
					style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
					<span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">Assets by</span>
					<span style="color: #fff; font-weight: 700;">Treyarch</span>
				</div>

                <div style="display: flex; justify-content: space-between; width: 100%; max-width: 220px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">Last Update</span>
                    <span style="color: #fff; font-weight: 700;">Jan 17, 2026</span>
                </div>

            </div>
        `;
	} else if (type === 'Reset') {
		title.textContent = 'RESET ALL?';
		title.style.color = 'var(--accent-red)';
		content.innerHTML = `
            <p>Are you sure you want to delete all saved data?</p>
            <p style="font-size:12px; color:#888;">This action cannot be undone.</p>
            <div style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
                <button class="btn-ui" id="modal-yes" style="background:var(--accent-red); justify-content:center;">YES, RESET</button>
                <button class="btn-ui" id="modal-no" style="justify-content:center;">CANCEL</button>
            </div>
        `;

		document.getElementById('modal-yes').addEventListener('click', () => {
			localStorage.removeItem(STORAGE_KEY);
			location.reload();
		});
		document
			.getElementById('modal-no')
			.addEventListener('click', closeModal);
	}
}

function closeModal() {
	const modal = document.getElementById('modal-overlay');
	modal.classList.remove('show');
	setTimeout(() => {
		modal.style.display = 'none';
	}, 300);
}
