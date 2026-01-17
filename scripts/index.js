/* --- Language System --- */
const LANG_STORAGE_KEY = 'astra_language_v1';

const translations = {
	en: {
		flag: '🇺🇸',
		name: 'English',
		step0_title: 'Step 0 - Never forget your Invite Code',
		step1_title: 'Step 1 - O.S.C.A.R. Planets Tracker',
		step2_title: 'Step 2 - Mars coordinate code "Dec"',
		dec_label: 'DEC',
		step3_title: 'Step 3 - Books',
		wait_data: 'Wait Data ...',
		step4_title: 'Step 4 - Planets Coordinate',
		step5_title: 'Step 5 - Organ Order',
		btn_reset_order: 'Reset Order',
		btn_show_map: 'Show Map Order',
		options_menu: 'Options Menu ▲',
		close_menu: 'Close Menu ▼',
		btn_credits: 'Credits',
		btn_reset_all: 'Reset All',
		btn_close: 'Close',
		btn_show_statue_map: 'Show Statue Map',
		modal_credits_title: 'Credits',
		modal_reset_title: 'RESET ALL?',
		modal_reset_text: 'Are you sure you want to delete all saved data?',
		modal_reset_sub: 'This action cannot be undone.',
		modal_yes: 'YES, RESET',
		modal_cancel: 'CANCEL',
		tool_made: 'Tool Made by',
		assisted: 'Assisted by',
		assets: 'Assets by',
		last_update: 'Last Update',
		statue_marker: 'Click {n} time{s}',
	},
	fr: {
		flag: '🇫🇷',
		name: 'Français',
		step0_title: "Étape 0 - N'oubliez jamais votre Code Invitation",
		step1_title: 'Étape 1 - Traqueur Planètes O.S.C.A.R.',
		step2_title: 'Étape 2 - Coordonnées Mars "Déc"',
		dec_label: 'DÉC',
		step3_title: 'Étape 3 - Livres',
		wait_data: 'En attente ...',
		step4_title: 'Étape 4 - Coordonnées Planètes',
		step5_title: "Étape 5 - Ordre de l'Orgue",
		btn_reset_order: "Réinitialiser l'ordre",
		btn_show_map: 'Voir Carte',
		options_menu: 'Menu Options ▲',
		close_menu: 'Fermer Menu ▼',
		btn_credits: 'Crédits',
		btn_reset_all: 'Tout Réinitialiser',
		btn_close: 'Fermer',
		btn_show_statue_map: 'Voir Carte Statues',
		modal_credits_title: 'Crédits',
		modal_reset_title: 'TOUT EFFACER ?',
		modal_reset_text: 'Voulez-vous vraiment supprimer toutes les données ?',
		modal_reset_sub: 'Cette action est irréversible.',
		modal_yes: 'OUI, EFFACER',
		modal_cancel: 'ANNULER',
		tool_made: 'Outil par',
		assisted: 'Assisté par',
		assets: 'Assets par',
		last_update: 'Dernière M.À.J',
		statue_marker: 'Clic {n} fois',
	},
	de: {
		flag: '🇩🇪',
		name: 'Deutsch',
		step0_title: 'Schritt 0 - Einladungscode nicht vergessen',
		step1_title: 'Schritt 1 - O.S.C.A.R. Planeten Tracker',
		step2_title: 'Schritt 2 - Mars Koordinaten "Dez"',
		dec_label: 'DEZ',
		step3_title: 'Schritt 3 - Bücher',
		wait_data: 'Warte auf Daten ...',
		step4_title: 'Schritt 4 - Planeten Koordinaten',
		step5_title: 'Schritt 5 - Orgel Reihenfolge',
		btn_reset_order: 'Reihenfolge zurücksetzen',
		btn_show_map: 'Karte anzeigen',
		options_menu: 'Optionen Menü ▲',
		close_menu: 'Menü schließen ▼',
		btn_credits: 'Credits',
		btn_reset_all: 'Alles zurücksetzen',
		btn_close: 'Schließen',
		btn_show_statue_map: 'Statuen Karte',
		modal_credits_title: 'Credits',
		modal_reset_title: 'ALLES ZURÜCKSETZEN?',
		modal_reset_text:
			'Möchten Sie wirklich alle gespeicherten Daten löschen?',
		modal_reset_sub: 'Diese Aktion kann nicht rückgängig gemacht werden.',
		modal_yes: 'JA, LÖSCHEN',
		modal_cancel: 'ABBRECHEN',
		tool_made: 'Tool von',
		assisted: 'Unterstützt von',
		assets: 'Assets von',
		last_update: 'Letztes Update',
		statue_marker: 'Klick {n} mal',
	},
	es: {
		flag: '🇪🇸',
		name: 'Español',
		step0_title: 'Paso 0 - No olvides tu código de invitación',
		step1_title: 'Paso 1 - Rastreador Planetas O.S.C.A.R.',
		step2_title: 'Paso 2 - Coordenadas Marte "Dec"',
		dec_label: 'DEC',
		step3_title: 'Paso 3 - Libros',
		wait_data: 'Esperando datos ...',
		step4_title: 'Paso 4 - Coordenadas Planetas',
		step5_title: 'Paso 5 - Orden del Órgano',
		btn_reset_order: 'Restablecer Orden',
		btn_show_map: 'Ver Mapa',
		options_menu: 'Menú Opciones ▲',
		close_menu: 'Cerrar Menú ▼',
		btn_credits: 'Créditos',
		btn_reset_all: 'Restablecer Todo',
		btn_close: 'Cerrar',
		btn_show_statue_map: 'Mapa de Estatuas',
		modal_credits_title: 'Créditos',
		modal_reset_title: '¿BORRAR TODO?',
		modal_reset_text:
			'¿Estás seguro de que quieres borrar todos los datos?',
		modal_reset_sub: 'Esta acción no se puede deshacer.',
		modal_yes: 'SÍ, BORRAR',
		modal_cancel: 'CANCELAR',
		tool_made: 'Herramienta por',
		assisted: 'Asistido por',
		assets: 'Activos por',
		last_update: 'Última act.',
		statue_marker: 'Clic {n} vece{s}',
	},
	it: {
		flag: '🇮🇹',
		name: 'Italiano',
		step0_title: 'Passo 0 - Codice Invito',
		step1_title: 'Passo 1 - Tracker Pianeti O.S.C.A.R.',
		step2_title: 'Passo 2 - Coordinate Marte "Dec"',
		dec_label: 'DEC',
		step3_title: 'Passo 3 - Libri',
		wait_data: 'In attesa dati ...',
		step4_title: 'Passo 4 - Coordinate Pianeti',
		step5_title: 'Passo 5 - Ordine Organo',
		btn_reset_order: 'Resetta Ordine',
		btn_show_map: 'Mostra Mappa',
		options_menu: 'Menu Opzioni ▲',
		close_menu: 'Chiudi Menu ▼',
		btn_credits: 'Crediti',
		btn_reset_all: 'Resetta Tutto',
		btn_close: 'Chiudi',
		btn_show_statue_map: 'Mappa Statue',
		modal_credits_title: 'Crediti',
		modal_reset_title: 'RESETTARE TUTTO?',
		modal_reset_text: 'Sei sicuro di voler eliminare tutti i dati salvati?',
		modal_reset_sub: 'Questa azione non può essere annullata.',
		modal_yes: 'SÌ, RESETTA',
		modal_cancel: 'ANNULLA',
		tool_made: 'Strumento di',
		assisted: 'Assistito da',
		assets: 'Asset di',
		last_update: 'Ultimo agg.',
		statue_marker: 'Clicca {n} volt{s}',
	},
	ru: {
		flag: '🇷🇺',
		name: 'Русский',
		step0_title: 'Шаг 0 - Код приглашения',
		step1_title: 'Шаг 1 - Трекер планет O.S.C.A.R.',
		step2_title: 'Шаг 2 - Координаты Марса "ДEК"',
		dec_label: 'ДEК',
		step3_title: 'Шаг 3 - Книги',
		wait_data: 'Ожидание данных ...',
		step4_title: 'Шаг 4 - Координаты планет',
		step5_title: 'Шаг 5 - Порядок органа',
		btn_reset_order: 'Сбросить порядок',
		btn_show_map: 'Показать карту',
		options_menu: 'Меню опций ▲',
		close_menu: 'Закрыть меню ▼',
		btn_credits: 'Кредиты',
		btn_reset_all: 'Сбросить все',
		btn_close: 'Закрыть',
		btn_show_statue_map: 'Карта статуй',
		modal_credits_title: 'Кредиты',
		modal_reset_title: 'СБРОСИТЬ ВСЕ?',
		modal_reset_text:
			'Вы уверены, что хотите удалить все сохраненные данные?',
		modal_reset_sub: 'Это действие нельзя отменить.',
		modal_yes: 'ДА, СБРОСИТЬ',
		modal_cancel: 'ОТМЕНА',
		tool_made: 'Инструмент от',
		assisted: 'При поддержке',
		assets: 'Ресурсы от',
		last_update: 'Обновление',
		statue_marker: 'Клик {n} раз(а)',
	},
	pt: {
		flag: '🇵🇹',
		name: 'Português',
		step0_title: 'Passo 0 - Código de Convite',
		step1_title: 'Passo 1 - Rastreador Planetas O.S.C.A.R.',
		step2_title: 'Passo 2 - Coordenadas Marte "Dec"',
		dec_label: 'DEC',
		step3_title: 'Passo 3 - Livros',
		wait_data: 'Aguardando dados ...',
		step4_title: 'Passo 4 - Coordenadas Planetas',
		step5_title: 'Passo 5 - Ordem do Órgão',
		btn_reset_order: 'Redefinir Ordem',
		btn_show_map: 'Mostrar Mapa',
		options_menu: 'Menu de Opções ▲',
		close_menu: 'Fechar Menu ▼',
		btn_credits: 'Créditos',
		btn_reset_all: 'Redefinir Tudo',
		btn_close: 'Fechar',
		btn_show_statue_map: 'Mapa das Estátuas',
		modal_credits_title: 'Créditos',
		modal_reset_title: 'REDEFINIR TUDO?',
		modal_reset_text: 'Tem certeza que deseja apagar todos os dados?',
		modal_reset_sub: 'Esta ação não pode ser desfeita.',
		modal_yes: 'SIM, REDEFINIR',
		modal_cancel: 'CANCELAR',
		tool_made: 'Ferramenta por',
		assisted: 'Assistido por',
		assets: 'Assets por',
		last_update: 'Última at.',
		statue_marker: 'Clique {n} veze{s}',
	},
	cn: {
		flag: '🇨🇳',
		name: '简体中文',
		step0_title: '步骤 0 - 别忘了邀请码',
		step1_title: '步骤 1 - O.S.C.A.R. 行星追踪',
		step2_title: '步骤 2 - 火星坐标代码 "赤纬"',
		dec_label: '赤纬',
		step3_title: '步骤 3 - 书籍',
		wait_data: '等待数据 ...',
		step4_title: '步骤 4 - 行星坐标',
		step5_title: '步骤 5 - 风琴顺序',
		btn_reset_order: '重置顺序',
		btn_show_map: '显示地图',
		options_menu: '选项菜单 ▲',
		close_menu: '关闭菜单 ▼',
		btn_credits: '制作人员',
		btn_reset_all: '重置所有',
		btn_close: '关闭',
		btn_show_statue_map: '显示雕像地图',
		modal_credits_title: '制作人员',
		modal_reset_title: '重置所有？',
		modal_reset_text: '您确定要删除所有保存的数据吗？',
		modal_reset_sub: '此操作无法撤消。',
		modal_yes: '是，重置',
		modal_cancel: '取消',
		tool_made: '工具制作',
		assisted: '协助',
		assets: '资源',
		last_update: '最后更新',
		statue_marker: '点击 {n} 次',
	},
	jp: {
		flag: '🇯🇵',
		name: '日本語',
		step0_title: 'ステップ 0 - 招待コード',
		step1_title: 'ステップ 1 - 惑星トラッカー',
		step2_title: 'ステップ 2 - 火星座標 "赤緯"',
		dec_label: '赤緯',
		step3_title: 'ステップ 3 - 本',
		wait_data: 'データ待機中 ...',
		step4_title: 'ステップ 4 - 惑星座標',
		step5_title: 'ステップ 5 - オルガンの順序',
		btn_reset_order: '順序をリセット',
		btn_show_map: '地図を表示',
		options_menu: 'オプション ▲',
		close_menu: 'メニューを閉じる ▼',
		btn_credits: 'クレジット',
		btn_reset_all: 'すべてリセット',
		btn_close: '閉じる',
		btn_show_statue_map: '像の地図',
		modal_credits_title: 'クレジット',
		modal_reset_title: 'すべてリセット？',
		modal_reset_text: '保存されたデータをすべて削除してもよろしいですか？',
		modal_reset_sub: 'この操作は取り消せません。',
		modal_yes: 'はい、リセット',
		modal_cancel: 'キャンセル',
		tool_made: 'ツール作成',
		assisted: '協力',
		assets: 'アセット',
		last_update: '最終更新',
		statue_marker: 'クリック {n} 回',
	},
	ko: {
		flag: '🇰🇷',
		name: '한국어',
		step0_title: '0단계 - 초대 코드를 잊지 마세요',
		step1_title: '1단계 - O.S.C.A.R. 행성 추적기',
		step2_title: '2단계 - 화성 좌표 코드 "적위"',
		dec_label: '적위',
		step3_title: '3단계 - 책',
		wait_data: '데이터 대기 중 ...',
		step4_title: '4단계 - 행성 좌표',
		step5_title: '5단계 - 오르간 순서',
		btn_reset_order: '순서 초기화',
		btn_show_map: '지도 보기',
		options_menu: '옵션 메뉴 ▲',
		close_menu: '메뉴 닫기 ▼',
		btn_credits: '크레딧',
		btn_reset_all: '모두 초기화',
		btn_close: '닫기',
		btn_show_statue_map: '조각상 지도 보기',
		modal_credits_title: '크레딧',
		modal_reset_title: '모두 초기화하시겠습니까?',
		modal_reset_text: '저장된 모든 데이터를 삭제하시겠습니까?',
		modal_reset_sub: '이 작업은 되돌릴 수 없습니다.',
		modal_yes: '예, 초기화',
		modal_cancel: '취소',
		tool_made: '도구 제작:',
		assisted: '지원:',
		assets: '에셋:',
		last_update: '최근 업데이트',
		statue_marker: '{n}번 클릭',
	},
	pl: {
		flag: '🇵🇱',
		name: 'Polski',
		step0_title: 'Krok 0 - Kod Zaproszenia',
		step1_title: 'Krok 1 - Tracker Planet O.S.C.A.R.',
		step2_title: 'Krok 2 - Koordynaty Marsa "Dek"',
		dec_label: 'DEK',
		step3_title: 'Krok 3 - Książki',
		wait_data: 'Czekam na dane ...',
		step4_title: 'Krok 4 - Współrzędne Planet',
		step5_title: 'Krok 5 - Kolejność Organów',
		btn_reset_order: 'Zresetuj Kolejność',
		btn_show_map: 'Pokaż Mapę',
		options_menu: 'Opcje ▲',
		close_menu: 'Zamknij Menu ▼',
		btn_credits: 'Autorzy',
		btn_reset_all: 'Zresetuj Wszystko',
		btn_close: 'Zamknij',
		btn_show_statue_map: 'Mapa Pomników',
		modal_credits_title: 'Autorzy',
		modal_reset_title: 'ZRESETOWAĆ WSZYSTKO?',
		modal_reset_text: 'Czy na pewno chcesz usunąć wszystkie zapisane dane?',
		modal_reset_sub: 'Tej operacji nie można cofnąć.',
		modal_yes: 'TAK, ZRESETUJ',
		modal_cancel: 'ANULUJ',
		tool_made: 'Narzędzie stworzone przez',
		assisted: 'Przy pomocy',
		assets: 'Zasoby',
		last_update: 'Ost. aktualizacja',
		statue_marker: 'Kliknij {n} raz(y)',
	},
	tr: {
		flag: '🇹🇷',
		name: 'Türkçe',
		step0_title: 'Adım 0 - Davet Kodunu Unutma',
		step1_title: 'Adım 1 - O.S.C.A.R. Gezegen Takibi',
		step2_title: 'Adım 2 - Mars Koordinatı "Dec"',
		dec_label: 'DEC',
		step3_title: 'Adım 3 - Kitaplar',
		wait_data: 'Veri Bekleniyor ...',
		step4_title: 'Adım 4 - Gezegen Koordinatları',
		step5_title: 'Adım 5 - Org Sırası',
		btn_reset_order: 'Sırayı Sıfırla',
		btn_show_map: 'Haritayı Göster',
		options_menu: 'Seçenekler ▲',
		close_menu: 'Menüyü Kapat ▼',
		btn_credits: 'Emeği Geçenler',
		btn_reset_all: 'Hepsini Sıfırla',
		btn_close: 'Kapat',
		btn_show_statue_map: 'Heykel Haritası',
		modal_credits_title: 'Emeği Geçenler',
		modal_reset_title: 'HEPSİNİ SIFIRLA?',
		modal_reset_text:
			'Tüm kayıtlı verileri silmek istediğinize emin misiniz?',
		modal_reset_sub: 'Bu işlem geri alınamaz.',
		modal_yes: 'EVET, SIFIRLA',
		modal_cancel: 'İPTAL',
		tool_made: 'Araç Yapımcısı',
		assisted: 'Yardımcı',
		assets: 'Varlıklar',
		last_update: 'Son Güncelleme',
		statue_marker: '{n} kez tıkla',
	},
	nl: {
		flag: '🇳🇱',
		name: 'Nederlands',
		step0_title: 'Stap 0 - Vergeet je Uitnodigingscode niet',
		step1_title: 'Stap 1 - O.S.C.A.R. Planeten Tracker',
		step2_title: 'Stap 2 - Mars coördinaat "Dec"',
		dec_label: 'DEC',
		step3_title: 'Stap 3 - Boeken',
		wait_data: 'Wachten op data ...',
		step4_title: 'Stap 4 - Planeten Coördinaten',
		step5_title: 'Stap 5 - Orgel Volgorde',
		btn_reset_order: 'Volgorde Resetten',
		btn_show_map: 'Toon Kaart',
		options_menu: 'Opties Menu ▲',
		close_menu: 'Sluit Menu ▼',
		btn_credits: 'Credits',
		btn_reset_all: 'Alles Resetten',
		btn_close: 'Sluiten',
		btn_show_statue_map: 'Toon Standbeelden Kaart',
		modal_credits_title: 'Credits',
		modal_reset_title: 'ALLES RESETTEN?',
		modal_reset_text:
			'Weet je zeker dat je alle opgeslagen gegevens wilt verwijderen?',
		modal_reset_sub: 'Deze actie kan niet ongedaan worden gemaakt.',
		modal_yes: 'JA, RESETTEN',
		modal_cancel: 'ANNULEREN',
		tool_made: 'Gemaakt door',
		assisted: 'Geassisteerd door',
		assets: 'Assets door',
		last_update: 'Laatste Update',
		statue_marker: 'Klik {n} keer',
	},
	sv: {
		flag: '🇸🇪',
		name: 'Svenska',
		step0_title: 'Steg 0 - Glöm inte din inbjudningskod',
		step1_title: 'Steg 1 - O.S.C.A.R. Planetspårare',
		step2_title: 'Steg 2 - Mars koordinat "Dec"',
		dec_label: 'DEC',
		step3_title: 'Steg 3 - Böcker',
		wait_data: 'Väntar på data ...',
		step4_title: 'Steg 4 - Planetkoordinater',
		step5_title: 'Steg 5 - Orgelordning',
		btn_reset_order: 'Återställ Ordning',
		btn_show_map: 'Visa Karta',
		options_menu: 'Alternativmeny ▲',
		close_menu: 'Stäng Meny ▼',
		btn_credits: 'Credits',
		btn_reset_all: 'Återställ Allt',
		btn_close: 'Stäng',
		btn_show_statue_map: 'Visa Statykarta',
		modal_credits_title: 'Credits',
		modal_reset_title: 'ÅTERSTÄLL ALLT?',
		modal_reset_text: 'Är du säker på att du vill radera all sparad data?',
		modal_reset_sub: 'Denna åtgärd kan inte ångras.',
		modal_yes: 'JA, ÅTERSTÄLL',
		modal_cancel: 'AVBRYT',
		tool_made: 'Verktyg av',
		assisted: 'Assisterad av',
		assets: 'Tillgångar av',
		last_update: 'Senast uppdaterad',
		statue_marker: 'Klicka {n} gång(er)',
	},
	tw: {
		flag: '🇹🇼',
		name: '繁體中文',
		step0_title: '步驟 0 - 別忘了邀請碼',
		step1_title: '步驟 1 - O.S.C.A.R. 行星追蹤',
		step2_title: '步驟 2 - 火星座標代碼 "赤緯"',
		dec_label: '赤緯',
		step3_title: '步驟 3 - 書籍',
		wait_data: '等待數據 ...',
		step4_title: '步驟 4 - 行星座標',
		step5_title: '步驟 5 - 風琴順序',
		btn_reset_order: '重置順序',
		btn_show_map: '顯示地圖',
		options_menu: '選項菜單 ▲',
		close_menu: '關閉菜單 ▼',
		btn_credits: '製作人員',
		btn_reset_all: '重置所有',
		btn_close: '關閉',
		btn_show_statue_map: '顯示雕像地圖',
		modal_credits_title: '製作人員',
		modal_reset_title: '重置所有？',
		modal_reset_text: '您確定要刪除所有保存的數據嗎？',
		modal_reset_sub: '此操作無法撤消。',
		modal_yes: '是，重置',
		modal_cancel: '取消',
		tool_made: '工具製作',
		assisted: '協助',
		assets: '資源',
		last_update: '最後更新',
		statue_marker: '點擊 {n} 次',
	},
	uk: {
		flag: '🇺🇦',
		name: 'Українська',
		step0_title: 'Крок 0 - Код запрошення',
		step1_title: 'Крок 1 - Трекер планет O.S.C.A.R.',
		step2_title: 'Крок 2 - Координати Марса "СХИЛ"',
		dec_label: 'СХИЛ',
		step3_title: 'Крок 3 - Книги',
		wait_data: 'Очікування даних ...',
		step4_title: 'Крок 4 - Координати планет',
		step5_title: 'Крок 5 - Порядок органу',
		btn_reset_order: 'Скинути порядок',
		btn_show_map: 'Показати карту',
		options_menu: 'Меню опцій ▲',
		close_menu: 'Закрити меню ▼',
		btn_credits: 'Кредити',
		btn_reset_all: 'Скинути все',
		btn_close: 'Закрити',
		btn_show_statue_map: 'Карта статуй',
		modal_credits_title: 'Кредити',
		modal_reset_title: 'СКИНУТИ ВСЕ?',
		modal_reset_text: 'Ви впевнені, що хочете видалити всі збережені дані?',
		modal_reset_sub: 'Цю дію неможливо скасувати.',
		modal_yes: 'ТАК, СКИНУТИ',
		modal_cancel: 'СКАСУВАТИ',
		tool_made: 'Інструмент від',
		assisted: 'За підтримки',
		assets: 'Ресурси від',
		last_update: 'Оновлено',
		statue_marker: 'Клік {n} раз(ів)',
	},
	cs: {
		flag: '🇨🇿',
		name: 'Čeština',
		step0_title: 'Krok 0 - Kód pozvánky',
		step1_title: 'Krok 1 - Sledování planet O.S.C.A.R.',
		step2_title: 'Krok 2 - Souřadnice Marsu "Dec"',
		dec_label: 'DEC',
		step3_title: 'Krok 3 - Knihy',
		wait_data: 'Čekání na data ...',
		step4_title: 'Krok 4 - Souřadnice planet',
		step5_title: 'Krok 5 - Pořadí varhan',
		btn_reset_order: 'Resetovat pořadí',
		btn_show_map: 'Zobrazit mapu',
		options_menu: 'Možnosti ▲',
		close_menu: 'Zavřít menu ▼',
		btn_credits: 'Kredity',
		btn_reset_all: 'Resetovat vše',
		btn_close: 'Zavřít',
		btn_show_statue_map: 'Mapa soch',
		modal_credits_title: 'Kredity',
		modal_reset_title: 'RESETOVAT VŠE?',
		modal_reset_text: 'Opravdu chcete smazat všechna uložená data?',
		modal_reset_sub: 'Tuto akci nelze vrátit zpět.',
		modal_yes: 'ANO, RESETOVAT',
		modal_cancel: 'ZRUŠIT',
		tool_made: 'Nástroj vytvořil',
		assisted: 'Asistence',
		assets: 'Aktiva od',
		last_update: 'Poslední aktualizace',
		statue_marker: 'Klikněte {n} krát',
	},
};

let currentLang = 'en';

function t(key) {
	return translations[currentLang][key] || translations['en'][key] || key;
}

function initLanguage() {
	const saved = localStorage.getItem(LANG_STORAGE_KEY);
	if (saved && translations[saved]) {
		currentLang = saved;
	} else {
		const browserLang = navigator.language.slice(0, 2);
		if (translations[browserLang]) {
			currentLang = browserLang;
		}
	}

	setupLanguageSelector();
	applyTranslations();
}

function setupLanguageSelector() {
	const container = document.getElementById('lang-menu');
	const btn = document.getElementById('lang-btn');

	if (!container || !btn) return;

	container.innerHTML = '';

	Object.keys(translations).forEach((code) => {
		const langData = translations[code];
		const div = document.createElement('div');
		div.className = `lang-option ${code === currentLang ? 'active' : ''}`;
		div.innerHTML = `<span>${langData.flag}</span><span>${langData.name}</span>`;
		div.onclick = () => {
			currentLang = code;
			localStorage.setItem(LANG_STORAGE_KEY, code);
			applyTranslations();
			container.classList.remove('show');
			setupLanguageSelector();
		};
		container.appendChild(div);
	});

	btn.onclick = (e) => {
		e.stopPropagation();
		container.classList.toggle('show');
	};

	document.addEventListener('click', (e) => {
		if (!container.contains(e.target) && e.target !== btn) {
			container.classList.remove('show');
		}
	});
}

function applyTranslations() {
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		el.textContent = t(key);
	});

	const btnMap = document.getElementById('btn-show-statue-map');
	if (btnMap) {
		btnMap.textContent = t('btn_show_statue_map');
	}

	const menuBtn = document.getElementById('menu-toggle-btn');
	if (menuBtn) {
		const isMenuOpen = document
			.getElementById('bottom-menu')
			?.classList.contains('open');
		menuBtn.textContent = isMenuOpen ? t('close_menu') : t('options_menu');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initLanguage();
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

	const books = document.querySelectorAll('#step3-container .book-item');
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
				'#step3-container .book-item',
			);

			books.forEach((btn, index) => {
				if (state.step3.includes(index)) {
					btn.setAttribute('data-selected', 'true');
					btn.classList.add('selected');
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

/* --- Step 3: Books & Statue Map Logic --- */
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

const statueCoords = {
	1: { x: 619, y: 763, anchor: 'bottom-right' },
	2: { x: 685, y: 325, anchor: 'top-left' },
	3: { x: 955, y: 763, anchor: 'bottom-right' },
};

let statueCounts = { 1: 0, 2: 0, 3: 0 };

function initBooks() {
	const container =
		document.getElementById('step3-container') ||
		document.querySelector('.accordion-item:nth-child(4) .content-padding');
	if (!container) return;

	container.id = 'step3-container';
	container.innerHTML = '';

	const booksGrid = document.createElement('div');
	booksGrid.className = 'books-grid';

	bookData.forEach((book, index) => {
		const item = document.createElement('div');
		item.className = 'book-item';

		const imgIndex = index + 1;

		item.setAttribute('data-selected', 'false');
		item.setAttribute('data-statue-id', book.statueId);
		item.setAttribute('data-index', index);

		const img = document.createElement('img');
		img.src = `public/imgs/books/${imgIndex}.png`;
		img.alt = book.title;

		item.appendChild(img);

		item.addEventListener('click', () => {
			const isSelected = item.getAttribute('data-selected') === 'true';

			if (!isSelected) {
				item.setAttribute('data-selected', 'true');
				item.classList.add('selected');
				updateStatueCount(book.statueId, 1);
			} else {
				item.setAttribute('data-selected', 'false');
				item.classList.remove('selected');
				updateStatueCount(book.statueId, -1);
			}
			saveData();
		});

		booksGrid.appendChild(item);
	});

	const btnMap = document.createElement('button');
	btnMap.className = 'btn-ui';
	btnMap.id = 'btn-show-statue-map';
	btnMap.style.cssText =
		'background: var(--accent-orange); margin-top: 5px; justify-content: center; width: 100%;';
	btnMap.setAttribute('data-i18n', 'btn_show_statue_map');
	btnMap.textContent = t('btn_show_statue_map');
	btnMap.onclick = openStatueMap;

	container.appendChild(booksGrid);
	container.appendChild(btnMap);
}

function updateStatueCount(id, change) {
	statueCounts[id] = Math.max(0, statueCounts[id] + change);
	updateStatueMarkers();
}

function openStatueMap() {
	const overlay = document.getElementById('statue-modal-overlay');
	overlay.style.display = 'flex';
	setTimeout(() => {
		overlay.classList.add('show');
		updateStatueMarkers();
	}, 10);
}

function updateStatueMarkers() {
	const container = document.getElementById('statue-markers-container');
	const img = document.getElementById('statue-map-image');

	if (!container || !img || img.clientWidth === 0) return;

	container.innerHTML = '';
	const scale = img.clientWidth / 1080;

	for (let id in statueCoords) {
		const coord = statueCoords[id];

		const marker = document.createElement('div');
		marker.className = 'statue-marker';
		const count = statueCounts[id];

		const txt = t('statue_marker');
		const s = count > 1 ? 's' : '';
		marker.textContent = txt.replace('{n}', count).replace('{s}', s);

		const posX = coord.x * scale;
		const posY = coord.y * scale;

		marker.style.left = posX + 'px';
		marker.style.top = posY + 'px';

		marker.style.fontSize = Math.max(10, 12 * scale) + 'px';

		if (coord.anchor === 'bottom-right') {
			marker.classList.add('arrow-br');
		} else {
			marker.classList.add('arrow-tl');
		}

		container.appendChild(marker);
	}
}

document.getElementById('btn-statue-map-close').onclick = () => {
	const overlay = document.getElementById('statue-modal-overlay');
	overlay.classList.remove('show');
	setTimeout(() => (overlay.style.display = 'none'), 300);
};

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
			const key = menu.classList.contains('open')
				? 'close_menu'
				: 'options_menu';
			btnMenu.setAttribute('data-i18n', key);
			btnMenu.textContent = t(key);
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
		title.textContent = t('modal_credits_title');
		content.innerHTML = `
<div class="modal-text"
                style="display: flex; flex-direction: column; gap: 10px; align-items: center; margin-bottom: 25px;">

                <div
                    style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">${t('tool_made')}</span>
                    <span style="color: #fff; font-weight: 700;">Rayzox57</span>
                </div>

                <div
                    style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">${t('assisted')}</span>
                    <span style="color: #fff; font-weight: 700;">Gemini Pro</span>
                </div>

				<div
					style="display: flex; justify-content: space-between; width: 100%; max-width: 220px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
					<span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">${t('assets')}</span>
					<span style="color: #fff; font-weight: 700;">Treyarch</span>
				</div>

                <div style="display: flex; justify-content: space-between; width: 100%; max-width: 220px;">
                    <span style="color: #95a5a6; font-size: 12px; text-transform: uppercase;">${t('last_update')}</span>
                    <span style="color: #fff; font-weight: 700;">Jan 17, 2026</span>
                </div>

            </div>
        `;
	} else if (type === 'Reset') {
		title.textContent = t('modal_reset_title');
		title.style.color = 'var(--accent-red)';
		content.innerHTML = `
            <p>${t('modal_reset_text')}</p>
            <p style="font-size:12px; color:#888;">${t('modal_reset_sub')}</p>
            <div style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
                <button class="btn-ui" id="modal-yes" style="background:var(--accent-red); justify-content:center;">${t('modal_yes')}</button>
                <button class="btn-ui" id="modal-no" style="justify-content:center;">${t('modal_cancel')}</button>
            </div>
        `;

		document.getElementById('modal-yes').addEventListener('click', () => {
			const currentLangSafe = localStorage.getItem(LANG_STORAGE_KEY);
			localStorage.removeItem(STORAGE_KEY);
			if (currentLangSafe)
				localStorage.setItem(LANG_STORAGE_KEY, currentLangSafe);
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
