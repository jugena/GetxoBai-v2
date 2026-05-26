// GETXOBAI - SYSTEM STATE, TRANSLATIONS & LOGIC

// Bilingual Translation Dictionary (Basque default)
const TRANSLATIONS = {
  eu: {
    tab_ronda: "Ronda",
    tab_historial: "Historiala",
    tab_cuadrilla: "Kuadrilla",
    tab_bebidas: "Edariak",
    
    ronda_title: "Eskaeraren Laburpena",
    unassigned_alert: "Edaririk gabeko lagunak:",
    ronda_empty_desc: "Hasteko, gehitu lagunak \"Kuadrilla\" fitxan eta aktibatu gaur parrandan daudenak.",
    btn_go_cuadrilla: "Kuadrillara joan",
    ronda_empty_active_title: "Ez dago eskaerarik aktibo",
    ronda_empty_active_desc: "Asignatu edariak zure lagunei goiko abisua erabiliz.",
    
    historial_title: "Erregistratutako Rondak",
    btn_clear_history: "Dena Garbitu",
    history_empty_title: "Ez dago rondarik oraindik",
    history_empty_desc: "Itxi ahala, ronda guztiak hemen agertuko dira orden kronologikoan.",
    
    cuadrilla_title: "Kuadrillako Lagunak",
    cuadrilla_instruction: "Aktibatu gaur parrandan dauden lagunak. Desaktibatuta daudenak ez dira agertuko ronda aktiboan.",
    
    bebidas_title: "Edari Motak",
    bebidas_instruction: "Edari hauek betirako gordeko dira. Zure edari gogokoenak gehitu ditzakezu (adib. Zuritoa, Txakolina, Kalimotxoa).",
    
    btn_close: "Itxi",
    
    modal_person_add: "Kuadrillara Gehitu",
    modal_person_edit: "Laguna Editatu",
    modal_label_name: "Lagunaren Izena",
    modal_label_fav: "Berezko edaria",
    modal_option_no_fav: "(Berezko edaririk gabe)",
    
    modal_drink_add: "Edaria Gehitu",
    modal_drink_edit: "Edaria Editatu",
    modal_drink_label_name: "Edariaren Izena",
    modal_drink_label_cat: "Kategoria / Mota (Aukerakoa)",
    
    btn_cancel: "Utzi",
    btn_add: "Gehitu",
    btn_save: "Gorde",
    
    // Dynamic text builders
    active_drinks_count: (n) => `${n} edari`,
    friends_count: (n) => `${n} lagun`,
    drinks_count: (n) => `${n} mota`,
    
    toast_copied: "Eskaera arbelean kopiatu da WhatsAppez bidaltzeko!",
    toast_saved_round: (name) => `${name} gordeta!`,
    toast_friend_added: (name) => `"${name}" kuadrillara gehitu da!`,
    toast_friend_edited: (name) => `"${name}" aldatu da!`,
    toast_drink_added: (name) => `"${name}" betirako gorde da!`,
    toast_drink_edited: (name) => `"${name}" aldatu da!`,
    toast_drink_removed: "Edaria ezabatu da betirako",
    toast_friend_removed: "Laguna ezabatu da",
    toast_round_removed: "Ronda ezabatu da",
    toast_history_cleared: "Historiala garbitu da",
    toast_session_reset: "Saio berria hasi da!",
    toast_round_restored: "Asignazioak kargatu dira!",
    
    btn_mini_change: "Aldatu",
    btn_mini_remove: "Kendu",
    
    confirm_clear_history: "Ziur zaude ronda guztiak ezabatu nahi dituzula?",
    confirm_reset_session: "Saio berri bat hasi nahi duzu? Gaurko ronden historiala ezabatuko da, baina lagunak eta edariak mantenduko ditugu.",
    confirm_delete_round: "Ziur zaude ronda hau ezabatu nahi duzula historrialetik?",
    confirm_delete_friend: (name) => `Ziur zaude ${name} kuadrillatik ezabatu nahi duzula?`,
    confirm_delete_drink: (name) => `Ziur zaude "${name}" edaria betirako ezabatu nahi duzula?`,
    confirm_repeat_round: (name) => `Nahi duzu "${name}" rondako lagunak eta edariak kargatu ronda aktiboan?`,
    
    btn_repeat_round: "Ronda Kargatu",
    jornada_ended: "🔴 Parranda Amaituta!",
    toast_jornada_ended: "Jardunaldia amaituta! Lolo egitera! 🛌 ze goxo!",

    btn_close_round: (n) => `${n}. Ronda Amaitu`,
    toast_friend_removed_drink: (name) => `${name}ri edaria kendu zaio`,
    toast_friend_active_status: (name, active) => `"${name}" ${active ? 'aktibatu' : 'desaktibatu'} da gaur parrandarako!`,
    cuadrilla_empty: "Ez dago lagunik kuadrillan oraindik. Gehitu bat beheko botoiarekin.",
    bebidas_empty: "Ez dago edaririk gordean oraindik. Gehitu bat beheko botoiarekin.",
    friend_preference_label: "Preferentzia:",
    friend_preference_none: "Bat ere ez",
    drink_category_label: "Kategoria:",
    drink_category_default: "Edariak",
    drink_category_placeholder: "Adib. Garagardoa, Ardoa, Kopa, Freskagarria...",
    modal_label_name_placeholder: "Adib. Jon, Ane, Kepa...",
    modal_drink_label_name_placeholder: "Adib. Zuritoa, Txakolina...",
    modal_drink_label_cat_placeholder: "Adib. Garagardoa, Ardoa...",
    sheet_title: (name) => `Zer hartuko du ${name}k?`,
    history_saved_at: (time) => `🕒 ${time}ean gordeta`,
    history_delete_tooltip: "Ronda ezabatu",
    history_drink_fallback: "Aurreko edaria",
    history_person_fallback: "Aurreko laguna",
    whatsapp_active_round: "Ronda",
    whatsapp_unassigned: "Edaririk gabe",
    whatsapp_ordered_by: "Eskatzaileak",
    btn_start_parranda: "Parranda Hasi!",
    bar_placeholder: "Tabernaren izena...",
    prompt_bar_name: "Sartu tabernaren izena:",
    txt_btn_take_photo: "Argazkia egin",
    txt_btn_upload_photo: "Galeria",
    txt_btn_delete_photo: "Kendu",
    toast_photo_saved: "Argazkia gorde da!",
    toast_photo_deleted: "Argazkia ezabatu da!"
  },
  es: {
    tab_ronda: "Ronda",
    tab_historial: "Historial",
    tab_cuadrilla: "Cuadrilla",
    tab_bebidas: "Bebidas",
    
    ronda_title: "Resumen del Pedido",
    unassigned_alert: "Amigos sin bebida asignada:",
    ronda_empty_desc: "Para empezar la ronda, añade amigos en la pestaña \"Cuadrilla\" y activa a los que estén contigo hoy.",
    btn_go_cuadrilla: "Ir a Cuadrilla",
    ronda_empty_active_title: "No hay consumiciones activas",
    ronda_empty_active_desc: "Asigna bebidas a tus amigos usando la lista de advertencia superior o actívalos en la Cuadrilla.",
    
    historial_title: "Rondas Registradas",
    btn_clear_history: "Borrar Todo",
    history_empty_title: "Aún no hay rondas",
    history_empty_desc: "Las rondas que vayas cerrando en cada bar aparecerán aquí ordenadas cronológicamente.",
    
    cuadrilla_title: "Amigos de la Cuadrilla",
    cuadrilla_instruction: "Activa a los amigos que han salido hoy de fiesta. Las personas desactivadas no aparecerán en el bar activo ni sumarán a la ronda actual.",
    
    bebidas_title: "Tipos de Bebidas",
    bebidas_instruction: "Estas bebidas estarán guardadas para siempre. Puedes añadir tus bebidas preferidas locales (ej. Zurito, Txakoli, Kalimotxo, Cerveza Artesanal).",
    
    btn_close: "Cerrar",
    
    modal_person_add: "Añadir a la Cuadrilla",
    modal_person_edit: "Editar Amigo",
    modal_label_name: "Nombre del Amigo",
    modal_label_fav: "Bebida por defecto",
    modal_option_no_fav: "(Sin bebida por defecto)",
    
    modal_drink_add: "Añadir Bebida",
    modal_drink_edit: "Editar Bebida",
    modal_drink_label_name: "Nombre de la Bebida",
    modal_drink_label_cat: "Categoría / Tipo (Opcional)",
    
    btn_cancel: "Cancelar",
    btn_add: "Añadir",
    btn_save: "Guardar",
    
    // Dynamic text builders
    active_drinks_count: (n) => `${n} ${n === 1 ? 'bebida' : 'bebidas'}`,
    friends_count: (n) => `${n} ${n === 1 ? 'amigo' : 'amigos'}`,
    drinks_count: (n) => `${n} ${n === 1 ? 'tipo' : 'tipos'}`,
    
    toast_copied: "¡Resumen de pedido copiado al portapapeles!",
    toast_saved_round: (name) => `¡${name} guardada!`,
    toast_friend_added: (name) => `"${name}" añadido a la cuadrilla`,
    toast_friend_edited: (name) => `Amigo "${name}" modificado con éxito`,
    toast_drink_added: (name) => `"${name}" guardada para siempre`,
    toast_drink_edited: (name) => `Bebida "${name}" modificada`,
    toast_drink_removed: "Bebida eliminada permanentemente",
    toast_friend_removed: "Amigo eliminado",
    toast_round_removed: "Ronda eliminada",
    toast_history_cleared: "Historial eliminado por completo",
    toast_session_reset: "¡Nueva sesión iniciada! Historial vaciado.",
    toast_round_restored: "¡Asignaciones de ronda cargadas!",
    
    btn_mini_change: "Cambiar",
    btn_mini_remove: "Quitar",
    
    confirm_clear_history: "¿Seguro que quieres borrar todo el historial de rondas?",
    confirm_reset_session: "¿Quieres iniciar una nueva sesión de fiesta? Se vaciará el historial de bares de hoy, pero conservamos tus amigos y bebidas.",
    confirm_delete_round: "¿Seguro que quieres borrar este registro de ronda del historial?",
    confirm_delete_friend: (name) => `¿Seguro que quieres eliminar a ${name} de la cuadrilla?`,
    confirm_delete_drink: (name) => `¿Seguro que quieres eliminar la bebida "${name}" de la lista permanente?`,
    confirm_repeat_round: (name) => `¿Quieres cargar las asignaciones de la ronda "${name}" en la ronda activa?`,
    
    btn_repeat_round: "Repetir Ronda",
    jornada_ended: "🔴 ¡Jornada Finalizada!",
    toast_jornada_ended: "¡Jornada finalizada! ¡A lolos! 🛌💤",

    btn_close_round: (n) => `Finalizar Ronda ${n}`,
    toast_friend_removed_drink: (name) => `Se ha retirado la bebida a ${name}`,
    toast_friend_active_status: (name, active) => `¡"${name}" ${active ? 'activado/a' : 'desactivado/a'} para esta noche!`,
    cuadrilla_empty: "Aún no hay amigos en la cuadrilla. Añade algunos usando el botón inferior.",
    bebidas_empty: "Aún no hay tipos de bebida en tu lista permanente. Añade alguna con el botón de abajo.",
    friend_preference_label: "Preferencia:",
    friend_preference_none: "Ninguna",
    drink_category_label: "Categoría:",
    drink_category_default: "Varios",
    drink_category_placeholder: "Ej. Cerveza, Vino, Refresco, Copa...",
    modal_label_name_placeholder: "Ej. Jon, Ane, Kepa...",
    modal_drink_label_name_placeholder: "Ej. Zurito, Txakoli, Verdejo...",
    modal_drink_label_cat_placeholder: "Ej. Cerveza, Vino, Refresco...",
    sheet_title: (name) => `¿Qué va a tomar ${name}?`,
    history_saved_at: (time) => `🕒 Guardado a las ${time}`,
    history_delete_tooltip: "Eliminar ronda",
    history_drink_fallback: "Bebida anterior",
    history_person_fallback: "Persona anterior",
    whatsapp_active_round: "Ronda",
    whatsapp_unassigned: "Sin bebida asignada",
    whatsapp_ordered_by: "Pedido por",
    btn_start_parranda: "¡Parranda!",
    bar_placeholder: "Nombre del bar...",
    prompt_bar_name: "Introduce el nombre del bar:",
    txt_btn_take_photo: "Hacer Foto",
    txt_btn_upload_photo: "Galería",
    txt_btn_delete_photo: "Quitar",
    toast_photo_saved: "¡Foto guardada!",
    toast_photo_deleted: "¡Foto eliminada!"
  }
};

// Default Initial Data (Spanish / Basque vibe)
const DEFAULT_DRINKS = [
  { id: 'd-1', name: 'Kaña', category: 'Cerveza' },
  { id: 'd-2', name: 'Zurito', category: 'Cerveza' },
  { id: 'd-3', name: 'Txakoli', category: 'Vino' },
  { id: 'd-4', name: 'Ardo Gorria (Kriantza)', category: 'Vino' },
  { id: 'd-5', name: 'Ardo Zuria (Verdejo)', category: 'Vino' },
  { id: 'd-6', name: 'Vermut Preparatua', category: 'Vermut' },
  { id: 'd-7', name: 'Freskagarria', category: 'Refresco' },
  { id: 'd-8', name: 'Kopa / Konbinatua', category: 'Copa' },
  { id: 'd-9', name: 'Ura', category: 'Agua' }
];

const DEFAULT_PEOPLE = [
  { id: 'p-1', name: 'Jon', active: true, defaultDrinkId: 'd-1' },
  { id: 'p-2', name: 'Ane', active: true, defaultDrinkId: 'd-4' },
  { id: 'p-3', name: 'Mikel', active: true, defaultDrinkId: 'd-2' },
  { id: 'p-4', name: 'Kepa', active: true, defaultDrinkId: 'd-6' },
  { id: 'p-5', name: 'Amaia', active: false, defaultDrinkId: 'd-5' } // Start inactive to show global toggle
];

// App State
let state = {
  drinks: [...DEFAULT_DRINKS],
  people: [...DEFAULT_PEOPLE],
  rounds: [],
  currentBar: '',
  currentOrders: {}, // { personId: drinkId }
  lang: 'eu' // Default language is Euskera!
};

// Helper: Active Person ID being modified in drink selection bottom sheet
let activeSelectPersonId = null;

// Temporary variable for editing person photo (base64 string or null)
let tempPersonPhotoDataUrl = null;

// Variable to store camera stream in memory
let cameraStream = null;

function startLiveCamera() {
  const modalCamera = document.getElementById('modal-camera');
  const video = document.getElementById('camera-video');
  
  if (!modalCamera || !video) return Promise.reject("Elements not found");
  
  // Open camera overlay
  modalCamera.classList.add('active');
  
  // Request camera stream from rear camera
  return navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { ideal: 'environment' },
      width: { ideal: 640 },
      height: { ideal: 640 }
    },
    audio: false
  }).then(stream => {
    cameraStream = stream;
    video.srcObject = stream;
    return true;
  }).catch(err => {
    console.error("Camera access error:", err);
    // Close overlay on error
    modalCamera.classList.remove('active');
    throw err;
  });
}

function stopLiveCamera() {
  const modalCamera = document.getElementById('modal-camera');
  const video = document.getElementById('camera-video');
  
  if (modalCamera) modalCamera.classList.remove('active');
  
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  
  if (video) video.srcObject = null;
}

function captureFrame() {
  const video = document.getElementById('camera-video');
  if (!video || !cameraStream) return null;
  
  const canvas = document.createElement('canvas');
  // Capture square crop
  const size = Math.min(video.videoWidth, video.videoHeight);
  canvas.width = 400;
  canvas.height = 400;
  
  const ctx = canvas.getContext('2d');
  
  // Center crop
  const sx = (video.videoWidth - size) / 2;
  const sy = (video.videoHeight - size) / 2;
  
  ctx.drawImage(video, sx, sy, size, size, 0, 0, 400, 400);
  
  const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
  return dataUrl;
}


// ==========================================================================
// INDEXEDDB MODULE FOR USER PHOTOS
// ==========================================================================
const DB_NAME = 'GetxoBaiDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_photos';

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

function savePhoto(personId, base64Data) {
  return initDB().then(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(base64Data, personId);
      request.onsuccess = () => resolve();
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

function getPhoto(personId) {
  return initDB().then(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(personId);
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });
  }).catch(err => {
    console.error("IndexedDB error:", err);
    return null;
  });
}

function deletePhoto(personId) {
  return initDB().then(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(personId);
      request.onsuccess = () => resolve();
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

// Deterministic pastel/dark neon color for avatar initials
function getAvatarColor(name) {
  if (!name) return 'var(--text-muted)';
  const colors = [
    '#f5a623', // Gold
    '#3498db', // Blue
    '#2ecc71', // Green
    '#9b59b6', // Purple
    '#ff4757', // Coral
    '#1abc9c', // Teal
    '#e67e22', // Orange
    '#d35400', // Dark Orange
    '#8e44ad', // Dark Violet
    '#27ae60'  // Dark Green
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return colors[sum % colors.length];
}

// Compress and Resize image to maximum 400px using canvas
function resizeAndCompressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 400; // max size in pixels
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress as JPEG with 0.7 quality
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
      img.src = e.target.result;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

// Open Image Lightbox Modal
function openLightbox(photoUrl, name) {
  const lightbox = document.getElementById('modal-lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
  if (lightbox && img && caption) {
    img.src = photoUrl;
    caption.innerText = name;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('modal-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

// Helper to update modal avatar edit preview
function updateAvatarEditPreview(dataUrl) {
  const preview = document.getElementById('avatar-edit-preview');
  const initialsSpan = document.getElementById('avatar-edit-initials');
  const btnDelete = document.getElementById('btn-delete-photo');
  const nameInput = document.getElementById('input-person-name');
  
  if (!preview || !btnDelete) return;
  
  if (dataUrl) {
    preview.innerHTML = `<img src="${dataUrl}" class="avatar-img" alt="Previsualización">`;
    btnDelete.classList.remove('hidden');
  } else {
    const initials = nameInput ? (nameInput.value.trim().charAt(0).toUpperCase() || '?') : '?';
    preview.innerHTML = `<span class="avatar-initials" id="avatar-edit-initials" style="background-color: ${getAvatarColor(nameInput ? nameInput.value : '')}">${initials}</span>`;
    btnDelete.classList.add('hidden');
  }
}


// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  translateApp(); // Translate static parts before rendering!
  initRouter();
  initEventListeners();
  renderAll();
  
  // Register Service Worker for offline PWA functionality
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then(reg => console.log('Service Worker registrado con éxito', reg.scope))
        .catch(err => console.error('Fallo al registrar el Service Worker', err));
    });
  }
});

// Load state from LocalStorage
function loadState() {
  let savedState = localStorage.getItem('getxo_bai_state');
  
  // Fallback migration from older test key to new GetxoBai key
  if (!savedState) {
    savedState = localStorage.getItem('bilbo_drinks_state');
    if (savedState) {
      localStorage.setItem('getxo_bai_state', savedState);
    }
  }

  if (savedState) {
    try {
      state = JSON.parse(savedState);
      // Ensure arrays and objects exist in older saved schemas
      if (!state.drinks) state.drinks = [...DEFAULT_DRINKS];
      if (!state.people) state.people = [...DEFAULT_PEOPLE];
      if (!state.rounds) state.rounds = [];
      if (!state.currentOrders) state.currentOrders = {};
      if (state.currentBar === undefined) state.currentBar = '';
      if (!state.lang) state.lang = 'eu';
    } catch (e) {
      console.error("Error al cargar localStorage, usando valores por defecto", e);
    }
  } else {
    // Brand new user: initialize active round orders with default drinks and Euskera lang!
    state.lang = 'eu';
    initializeCurrentOrders();
    saveState();
  }
}

// Save state to LocalStorage
function saveState() {
  localStorage.setItem('getxo_bai_state', JSON.stringify(state));
}

// Reset orders for the active people (empty for new session, allowing custom assignments)
function initializeCurrentOrders() {
  state.currentOrders = {};
}

// Router for Tabs
function initRouter() {
  const tabs = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Update Navigation Tab styles
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Toggle Active Tab Content with anim
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetTab) {
          section.classList.add('active');
        }
      });

      // Render tab-specific sections when switched to make sure updates are fresh
      if (targetTab === 'tab-ronda') renderRonda();
      if (targetTab === 'tab-historial') renderHistorial();
      if (targetTab === 'tab-cuadrilla') renderCuadrilla();
      if (targetTab === 'tab-bebidas') renderBebidas();
    });
  });
}

// Event Listeners for buttons, modals and forms
function initEventListeners() {
  // Language Switch Toggle
  document.getElementById('btn-lang-toggle').addEventListener('click', () => {
    const nextLang = state.lang === 'eu' ? 'es' : 'eu';
    state.lang = nextLang;
    saveState();
    translateApp();
    renderAll();
    showToast(nextLang === 'eu' ? 'Hizkuntza: Euskara  Basque' : 'Idioma: Castellano Spanish');
  });

  // Red "A lolos!" Button (Finalize Parranda/Jornada)
  document.getElementById('btn-a-lolos').addEventListener('click', () => {
    const t = TRANSLATIONS[state.lang];
    const activePeople = state.people.filter(p => p.active);
    const totalBebidasCount = activePeople.filter(p => state.currentOrders[p.id]).length;
    
    // Save this final round to history first if there are active drinks!
    if (totalBebidasCount > 0) {
      const roundName = getActiveRoundName();
      const roundRecord = {
        id: 'r-' + Date.now(),
        barName: roundName,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        orders: {}
      };
      activePeople.forEach(person => {
        const dId = state.currentOrders[person.id];
        if (dId) {
          roundRecord.orders[person.id] = dId;
          person.defaultDrinkId = dId;
        }
      });
      state.rounds.unshift(roundRecord);
    }
    
    // Prepend a nice finished day separator in the timeline
    const separatorRecord = {
      id: 'divider-' + Date.now(),
      isDivider: true,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
      barName: t.jornada_ended
    };
    state.rounds.unshift(separatorRecord);
    
    // Reset active orders (so the next round goes back to Ronda 1!)
    state.currentOrders = {};
    state.currentBar = '';
    
    saveState();
    renderAll();
    showToast(t.toast_jornada_ended);
    
    // Auto-switch to history tab to see the final divider
    setTimeout(() => {
      document.getElementById('tab-btn-historial').click();
    }, 500);
  });

  // Share summary text to clipboard
  document.getElementById('btn-share-summary').addEventListener('click', () => {
    const summaryText = generateSummaryClipboardText();
    navigator.clipboard.writeText(summaryText)
      .then(() => showToast(TRANSLATIONS[state.lang].toast_copied))
      .catch(() => showToast('Error', 'danger'));
  });

  // Close active round
  document.getElementById('btn-close-round').addEventListener('click', () => {
    closeActiveRound();
  });

  // Quick reset session button (keeps drinks & people, clears timeline and active bar)
  document.getElementById('btn-quick-new-session').addEventListener('click', () => {
    const t = TRANSLATIONS[state.lang];
    if (confirm(t.confirm_reset_session)) {
      state.rounds = [];
      state.currentBar = '';
      initializeCurrentOrders();
      saveState();
      renderAll();
      showToast(t.toast_session_reset);
    }
  });

  // Click listener for editing bar name via prompt dialog
  const editBarBtn = document.getElementById('btn-edit-bar-name');
  if (editBarBtn) {
    editBarBtn.addEventListener('click', () => {
      const t = TRANSLATIONS[state.lang];
      const newName = prompt(t.prompt_bar_name, state.currentBar || '');
      if (newName !== null) {
        state.currentBar = newName.trim();
        saveState();
        renderRonda(); // Re-render round header to show the new bar name
        showToast(state.lang === 'eu' ? "Tabernaren izena eguneratu da!" : "¡Nombre del bar actualizado!");
      }
    });
  }

  // Clear history button on Timeline tab
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    const t = TRANSLATIONS[state.lang];
    if (confirm(t.confirm_clear_history)) {
      state.rounds = [];
      saveState();
      renderHistorial();
      showToast(t.toast_history_cleared);
    }
  });

  // Bottom Sheet close
  const backdrop = document.getElementById('drink-sheet-backdrop');
  const btnCloseSheet = document.getElementById('btn-close-drink-sheet');
  
  btnCloseSheet.addEventListener('click', closeDrinkSheet);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeDrinkSheet();
  });

  // MODALS CONTROL
  const openModalButtons = [
    { btnId: 'btn-fab-add-person', modalId: 'modal-person', initFn: preparePersonModal },
    { btnId: 'btn-fab-add-drink', modalId: 'modal-drink', initFn: prepareDrinkModal }
  ];

  openModalButtons.forEach(setup => {
    const btn = document.getElementById(setup.btnId);
    if (btn) {
      btn.addEventListener('click', () => {
        setup.initFn();
        openModal(setup.modalId);
      });
    }
  });

  // Close modals clicking on cross or backdrop or cancel
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.getAttribute('data-close'));
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(modalBackdrop => {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal(modalBackdrop.id);
      }
    });
  });

  // Form Submissions
  document.getElementById('form-person').addEventListener('submit', (e) => {
    savePersonSubmit();
  });

  document.getElementById('form-drink').addEventListener('submit', (e) => {
    saveDrinkSubmit();
  });

  // --- USER PHOTO & LIGHTBOX EVENTS ---
  const btnTakePhoto = document.getElementById('btn-take-photo');
  const btnUploadPhoto = document.getElementById('btn-upload-photo');
  const inputPersonPhotoCamera = document.getElementById('input-person-photo-camera');
  const inputPersonPhotoGallery = document.getElementById('input-person-photo-gallery');
  const avatarEditPreview = document.getElementById('avatar-edit-preview');
  
  if (btnTakePhoto) {
    btnTakePhoto.addEventListener('click', () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        startLiveCamera().catch(err => {
          if (inputPersonPhotoCamera) inputPersonPhotoCamera.click();
        });
      } else {
        if (inputPersonPhotoCamera) inputPersonPhotoCamera.click();
      }
    });
  }
  if (btnUploadPhoto && inputPersonPhotoGallery) {
    btnUploadPhoto.addEventListener('click', () => inputPersonPhotoGallery.click());
  }
  if (avatarEditPreview) {
    avatarEditPreview.addEventListener('click', () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        startLiveCamera().catch(err => {
          if (inputPersonPhotoCamera) inputPersonPhotoCamera.click();
        });
      } else {
        if (inputPersonPhotoCamera) inputPersonPhotoCamera.click();
      }
    });
  }

  // Live Camera Controls (Shutter and Cancel)
  const btnCameraShutter = document.getElementById('btn-camera-shutter');
  const btnCameraCancel = document.getElementById('btn-camera-cancel');
  
  if (btnCameraShutter) {
    btnCameraShutter.addEventListener('click', () => {
      const dataUrl = captureFrame();
      if (dataUrl) {
        tempPersonPhotoDataUrl = dataUrl;
        updateAvatarEditPreview(dataUrl);
      }
      stopLiveCamera();
    });
  }
  
  if (btnCameraCancel) {
    btnCameraCancel.addEventListener('click', () => {
      stopLiveCamera();
    });
  }

  // Handle Photo selection and processing helper
  const handlePhotoSelect = (file) => {
    if (!file) return;
    resizeAndCompressImage(file).then(dataUrl => {
      tempPersonPhotoDataUrl = dataUrl;
      updateAvatarEditPreview(dataUrl);
    }).catch(err => {
      console.error("Error processing image:", err);
      showToast(state.lang === 'eu' ? "Errorea argazkia prozesatzean" : "Error al procesar la foto", 'danger');
    });
  };

  if (inputPersonPhotoCamera) {
    inputPersonPhotoCamera.addEventListener('change', (e) => {
      handlePhotoSelect(e.target.files[0]);
    });
  }
  if (inputPersonPhotoGallery) {
    inputPersonPhotoGallery.addEventListener('change', (e) => {
      handlePhotoSelect(e.target.files[0]);
    });
  }

  // Handle Photo deletion in form
  const btnDeletePhoto = document.getElementById('btn-delete-photo');
  if (btnDeletePhoto) {
    btnDeletePhoto.addEventListener('click', () => {
      tempPersonPhotoDataUrl = null;
      if (inputPersonPhotoCamera) inputPersonPhotoCamera.value = "";
      if (inputPersonPhotoGallery) inputPersonPhotoGallery.value = "";
      updateAvatarEditPreview(null);
    });
  }

  // Dynamic Initials Update in modal form as user types name
  const nameInput = document.getElementById('input-person-name');
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (!tempPersonPhotoDataUrl) {
        updateAvatarEditPreview(null);
      }
    });
  }

  // Lightbox Modal Controls
  const btnCloseLightbox = document.getElementById('btn-close-lightbox');
  const modalLightbox = document.getElementById('modal-lightbox');
  if (btnCloseLightbox) {
    btnCloseLightbox.addEventListener('click', closeLightbox);
  }
  if (modalLightbox) {
    modalLightbox.addEventListener('click', (e) => {
      if (e.target === modalLightbox) {
        closeLightbox();
      }
    });
  }
}


// Toast Notifications System
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;
  container.appendChild(toast);
  
  // Auto remove after animation completes
  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// Modal Toggle Helpers
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  if (modalId === 'modal-person') {
    stopLiveCamera();
  }
}

/* RENDERING SYSTEM */

// Global render
function renderAll() {
  renderRonda();
  renderHistorial();
  renderCuadrilla();
  renderBebidas();
}

// Translate all static UI parts based on the selected state.lang
function translateApp() {
  const lang = state.lang || 'eu';
  const t = TRANSLATIONS[lang];

  // Tab navigation
  document.querySelector('#tab-btn-ronda span').innerText = t.tab_ronda;
  document.querySelector('#tab-btn-historial span').innerText = t.tab_historial;
  document.querySelector('#tab-btn-cuadrilla span').innerText = t.tab_cuadrilla;
  document.querySelector('#tab-btn-bebidas span').innerText = t.tab_bebidas;

  // Active round elements
  const rondaTitle = document.querySelector('#tab-ronda .title-with-copy h2');
  if (rondaTitle) rondaTitle.innerText = t.ronda_title;
  
  const unassignedHeader = document.querySelector('#unassigned-alert-container .alert-header span');
  if (unassignedHeader) unassignedHeader.innerText = t.unassigned_alert;

  const rondaEmptyP = document.querySelector('#ronda-empty-state p');
  if (rondaEmptyP) rondaEmptyP.innerText = t.ronda_empty_desc;
  
  const rondaEmptyBtn = document.querySelector('#ronda-empty-state button');
  if (rondaEmptyBtn) rondaEmptyBtn.innerText = t.btn_go_cuadrilla;

  // History tab elements
  const historyTitle = document.querySelector('#tab-historial .section-title-container h2');
  if (historyTitle) historyTitle.innerText = t.historial_title;
  
  const clearHistoryBtn = document.getElementById('btn-clear-history');
  if (clearHistoryBtn) clearHistoryBtn.innerText = t.btn_clear_history;

  const historyEmptyH3 = document.querySelector('#history-empty-state h3');
  if (historyEmptyH3) historyEmptyH3.innerText = t.history_empty_title;

  const historyEmptyP = document.querySelector('#history-empty-state p');
  if (historyEmptyP) historyEmptyP.innerText = t.history_empty_desc;

  // Cuadrilla elements
  const cuadrillaTitle = document.querySelector('#tab-cuadrilla .section-title-container h2');
  if (cuadrillaTitle) cuadrillaTitle.innerText = t.cuadrilla_title;

  const cuadrillaInstruction = document.querySelector('#tab-cuadrilla .section-instruction');
  if (cuadrillaInstruction) cuadrillaInstruction.innerText = t.cuadrilla_instruction;

  // Bebidas elements
  const bebidasTitle = document.querySelector('#tab-bebidas .section-title-container h2');
  if (bebidasTitle) bebidasTitle.innerText = t.bebidas_title;

  const bebidasInstruction = document.querySelector('#tab-bebidas .section-instruction');
  if (bebidasInstruction) bebidasInstruction.innerText = t.bebidas_instruction;

  // Sheet close button
  const sheetClose = document.getElementById('btn-close-drink-sheet');
  if (sheetClose) sheetClose.innerText = t.btn_close;

  // Translate modal labels
  const personNameLabel = document.querySelector('label[for="input-person-name"]');
  if (personNameLabel) personNameLabel.innerText = t.modal_label_name;

  const selectFavLabel = document.querySelector('label[for="select-default-drink"]');
  if (selectFavLabel) selectFavLabel.innerText = t.modal_label_fav;

  const drinkNameLabel = document.querySelector('label[for="input-drink-name"]');
  if (drinkNameLabel) drinkNameLabel.innerText = t.modal_drink_label_name;

  // Translate Photo action buttons in modal
  const txtBtnTakePhoto = document.getElementById('txt-btn-take-photo');
  if (txtBtnTakePhoto) txtBtnTakePhoto.innerText = t.txt_btn_take_photo;

  const txtBtnUploadPhoto = document.getElementById('txt-btn-upload-photo');
  if (txtBtnUploadPhoto) txtBtnUploadPhoto.innerText = t.txt_btn_upload_photo;

  const txtBtnDeletePhoto = document.getElementById('txt-btn-delete-photo');
  if (txtBtnDeletePhoto) txtBtnDeletePhoto.innerText = t.txt_btn_delete_photo;

  // Cancel buttons in modals
  const cancelBtns = document.querySelectorAll('.modal .btn-secondary');
  cancelBtns.forEach(btn => {
    btn.innerText = t.btn_cancel;
  });

  // Translate Iniciar Parranda header button
  const startParrandaBtn = document.querySelector('#btn-quick-new-session span');
  if (startParrandaBtn) startParrandaBtn.innerText = t.btn_start_parranda;

  // Translate Bar Edit Button tooltip/aria-label
  const editBarBtn = document.getElementById('btn-edit-bar-name');
  if (editBarBtn) {
    const tooltipText = lang === 'eu' ? "Tabernaren izena aldatu" : "Editar nombre del bar";
    editBarBtn.setAttribute('title', tooltipText);
    editBarBtn.setAttribute('aria-label', tooltipText);
  }

  // Language switch buttons active style
  const euBtn = document.getElementById('lang-eu');
  const esBtn = document.getElementById('lang-es');
  if (lang === 'eu') {
    euBtn.classList.add('active');
    esBtn.classList.remove('active');
  } else {
    esBtn.classList.add('active');
    euBtn.classList.remove('active');
  }
}


// Keep track of expanded drinks globally
if (typeof expandedDrinkIds === 'undefined') {
  var expandedDrinkIds = new Set();
}

// Helper to determine the current active round name dynamically (bilingual & divider-aware)
function getActiveRoundName() {
  const roundNum = state.rounds.filter(r => !r.isDivider).length + 1;
  const barNameVal = state.currentBar ? state.currentBar.trim() : '';
  
  if (barNameVal) {
    return `${roundNum}. ${barNameVal}`;
  } else {
    return state.lang === 'eu' ? `${roundNum}. Ronda` : `Ronda ${roundNum}`;
  }
}

// RENDERING TAB 1: RONDA ACTIVA (Pivoted: Drink Centric & Automated Rounds)
function renderRonda() {
  const lang = state.lang || 'eu';
  const t = TRANSLATIONS[lang];

  // Update the Active Round header label dynamically (bilingual default or custom bar name)
  const activeRoundLabel = document.getElementById('active-round-label');
  if (activeRoundLabel) {
    activeRoundLabel.innerText = getActiveRoundName();
  }

  const activePeople = state.people.filter(p => p.active);
  const drinksRoundList = document.getElementById('drinks-round-list');
  const activeCountLabel = document.getElementById('active-people-count');
  const emptyState = document.getElementById('ronda-empty-state');
  const actionFooter = document.getElementById('round-footer-actions');
  const unassignedAlert = document.getElementById('unassigned-alert-container');
  const unassignedList = document.getElementById('unassigned-people-list');

  // 2. Handle global empty state (no active people)
  if (state.people.length === 0) {
    drinksRoundList.innerHTML = '';
    emptyState.classList.remove('hidden');
    actionFooter.classList.add('hidden');
    unassignedAlert.classList.add('hidden');
    activeCountLabel.innerText = t.active_drinks_count(0);
    return;
  }

  emptyState.classList.add('hidden');

  // 3. Calculate Unassigned People
  const unassignedPeople = activePeople.filter(p => !state.currentOrders[p.id]);
  
  if (unassignedPeople.length > 0) {
    unassignedAlert.classList.remove('hidden');
    unassignedList.innerHTML = '';
    unassignedPeople.forEach(person => {
      const chip = document.createElement('button');
      chip.className = 'unassigned-chip';
      chip.innerText = person.name;
      chip.addEventListener('click', () => {
        openDrinkSheet(person.id);
      });
      unassignedList.appendChild(chip);
    });
  } else {
    unassignedAlert.classList.add('hidden');
  }

  // 4. Group current active orders by drinkId
  const groupedOrders = {};
  let totalBebidasCount = 0;

  activePeople.forEach(person => {
    const drinkId = state.currentOrders[person.id];
    if (drinkId) {
      totalBebidasCount++;
      if (!groupedOrders[drinkId]) {
        groupedOrders[drinkId] = {
          drink: state.drinks.find(d => d.id === drinkId) || { name: 'Bebida desconocida', category: 'Varios' },
          people: []
        };
      }
      groupedOrders[drinkId].people.push(person);
    }
  });

  activeCountLabel.innerText = t.active_drinks_count(totalBebidasCount);

  // 5. Render list of drinks and collapsibles
  drinksRoundList.innerHTML = '';

  const activeDrinkIds = Object.keys(groupedOrders);

  if (activeDrinkIds.length === 0) {
    // Show descriptive empty state
    drinksRoundList.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="empty-icon" style="color: var(--text-muted);">
          <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
          <path d="M5 8h12v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8Z" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="13" y1="1" x2="13" y2="4" />
        </svg>
        <h3>${t.ronda_empty_active_title}</h3>
        <p>${t.ronda_empty_active_desc}</p>
      </div>
    `;
  } else {
    // Render accordions
    activeDrinkIds.forEach(drinkId => {
      const group = groupedOrders[drinkId];
      const count = group.people.length;
      const isExpanded = expandedDrinkIds.has(drinkId);

      const accordion = document.createElement('div');
      accordion.className = `drink-accordion ${isExpanded ? 'expanded' : ''}`;

      accordion.innerHTML = `
        <button class="drink-accordion-trigger" data-accordion-drink-id="${drinkId}">
          <div class="drink-trigger-left">
            <span class="drink-count-badge">${count}</span>
            <div class="drink-info-meta">
              <span class="drink-trigger-name">${group.drink.name}</span>
              <span class="drink-trigger-cat">${group.drink.category || (lang === 'eu' ? 'Edariak' : 'Varios')}</span>
            </div>
          </div>
          <svg class="drink-trigger-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="drink-accordion-content">
          <div class="accordion-inner-list">
            <!-- Dynamically populated friend rows -->
          </div>
        </div>
      `;

      // Populate expanded list of friends
      const innerList = accordion.querySelector('.accordion-inner-list');
      group.people.forEach(person => {
        const pRow = document.createElement('div');
        pRow.className = 'accordion-person-row';

        const initials = person.name.trim().charAt(0).toUpperCase() || '?';
        const avatarColor = getAvatarColor(person.name);

        pRow.innerHTML = `
          <div class="accordion-person-left-area">
            <div class="entity-avatar mini" data-ronda-avatar-person-id="${person.id}" title="Ver foto">
              <span class="avatar-initials" style="background-color: ${avatarColor}">${initials}</span>
            </div>
            <span class="accordion-person-name">${person.name}</span>
          </div>
          <div class="accordion-person-actions">
            <button class="btn-mini-change" data-btn-change-person-id="${person.id}">${t.btn_mini_change}</button>
            <button class="btn-mini-remove" data-btn-remove-person-id="${person.id}" title="${t.btn_mini_remove}" aria-label="${t.btn_mini_remove}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `;

        // Asynchronously load avatar image from IndexedDB
        getPhoto(person.id).then(photoUrl => {
          if (photoUrl) {
            const avatarEl = pRow.querySelector(`[data-ronda-avatar-person-id="${person.id}"]`);
            if (avatarEl) {
              avatarEl.innerHTML = `<img src="${photoUrl}" class="avatar-img" alt="${person.name}">`;
            }
          }
        });

        // Lightbox trigger in active round
        const avatarEl = pRow.querySelector(`[data-ronda-avatar-person-id="${person.id}"]`);
        if (avatarEl) {
          avatarEl.addEventListener('click', (e) => {
            e.stopPropagation();
            getPhoto(person.id).then(photoUrl => {
              if (photoUrl) {
                openLightbox(photoUrl, person.name);
              }
            });
          });
        }

        // Event: Change Person's Drink
        pRow.querySelector(`[data-btn-change-person-id="${person.id}"]`).addEventListener('click', (e) => {
          e.stopPropagation(); // Avoid accordion toggle
          openDrinkSheet(person.id);
        });

        // Event: Remove Person from this Drink (sends them to unassigned list)
        pRow.querySelector(`[data-btn-remove-person-id="${person.id}"]`).addEventListener('click', (e) => {
          e.stopPropagation();
          removePersonOrder(person.id);
        });

        innerList.appendChild(pRow);
      });

      // Event: Toggle Accordion collapse
      const trigger = accordion.querySelector('.drink-accordion-trigger');
      trigger.addEventListener('click', () => {
        if (expandedDrinkIds.has(drinkId)) {
          expandedDrinkIds.delete(drinkId);
          accordion.classList.remove('expanded');
        } else {
          expandedDrinkIds.add(drinkId);
          accordion.classList.add('expanded');
        }
      });

      drinksRoundList.appendChild(accordion);
    });
  }

  // 6. Manage Footer Close Button (Always visible, disabled if no drinks assigned)
  const closeBtn = document.getElementById('btn-close-round');
  if (closeBtn) {
    const roundNum = state.rounds.filter(r => !r.isDivider).length + 1;
    closeBtn.querySelector('span').innerText = t.btn_close_round(roundNum);
    
    if (activePeople.length > 0 && totalBebidasCount > 0) {
      closeBtn.disabled = false;
      closeBtn.classList.add('glow-button');
    } else {
      closeBtn.disabled = true;
      closeBtn.classList.remove('glow-button');
    }
  }
}

// Helper to remove a person's drink order (moves them to unassigned warning list)
function removePersonOrder(personId) {
  const person = state.people.find(p => p.id === personId);
  if (person) {
    delete state.currentOrders[personId];
    saveState();
    renderRonda();
    showToast(TRANSLATIONS[state.lang].toast_friend_removed_drink(person.name));
  }
}

// Toggle attendance (active status) of a friend
function togglePersonAttendance(personId, isActive) {
  const person = state.people.find(p => p.id === personId);
  if (person) {
    person.active = isActive;
    
    if (isActive) {
      // Put them back in current orders using default drink
      state.currentOrders[personId] = person.defaultDrinkId || (state.drinks[0] ? state.drinks[0].id : '');
    } else {
      // Remove entirely
      delete state.currentOrders[personId];
    }
    
    saveState();
    renderRonda();
    renderCuadrilla(); // Sync lists
  }
}

// Close active round and push to history
function closeActiveRound() {
  const lang = state.lang || 'eu';
  const t = TRANSLATIONS[lang];
  const activePeople = state.people.filter(p => p.active);
  const totalBebidasCount = activePeople.filter(p => state.currentOrders[p.id]).length;
  
  if (activePeople.length === 0 || totalBebidasCount === 0) {
    const errorMsg = lang === 'eu' ? 'Ez dago esleitutako edaririk ronda honetan' : 'No hay bebidas asignadas en esta ronda';
    showToast(errorMsg, 'danger');
    return;
  }

  const roundName = getActiveRoundName();

  // Construct round record
  const roundRecord = {
    id: 'r-' + Date.now(),
    barName: roundName,
    timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    orders: {}
  };

  activePeople.forEach(person => {
    const dId = state.currentOrders[person.id];
    if (dId) {
      roundRecord.orders[person.id] = dId;
      // Auto-update last used/preferred drink in default drink for next time!
      person.defaultDrinkId = dId;
    }
  });

  // Prepend to history
  state.rounds.unshift(roundRecord);

  // NOTE: We KEEP state.currentOrders exactly as they are to serve as a pre-populated template for the next round!
  // This satisfies: "se debe activar una siguiente ronda con los mismos valores de la anterior (personas, bebidas, etc.)"
  
  // Reset bar name for next bar
  state.currentBar = '';

  saveState();
  renderAll();
  
  // Switch to History page to see it recorded, or notify with a beautiful toast
  showToast(t.toast_saved_round(roundName));
  
  // Auto-switch to history tab to provide visual satisfaction of recording
  setTimeout(() => {
    document.getElementById('tab-btn-historial').click();
  }, 600);
}

// Generate human-friendly clipboard format for WhatsApp sharing
function generateSummaryClipboardText() {
  const t = TRANSLATIONS[state.lang];
  const roundName = getActiveRoundName();
  let text = `🍻 ${roundName} - GetxoBai\n---\n`;
  const activePeople = state.people.filter(p => p.active);
  
  const drinkCounts = {};
  activePeople.forEach(p => {
    const dId = state.currentOrders[p.id];
    if (dId) {
      drinkCounts[dId] = (drinkCounts[dId] || 0) + 1;
    }
  });

  Object.keys(drinkCounts).forEach(dId => {
    const count = drinkCounts[dId];
    const drinkObj = state.drinks.find(d => d.id === dId);
    const drinkName = drinkObj ? drinkObj.name : t.history_drink_fallback;
    text += `• ${count}x ${drinkName}\n`;
  });

  const unassigned = activePeople.filter(p => !state.currentOrders[p.id]);
  const assigned = activePeople.filter(p => state.currentOrders[p.id]);

  text += `\n${t.whatsapp_ordered_by} (${assigned.length}): ${assigned.map(p => p.name).join(', ')}`;
  if (unassigned.length > 0) {
    text += `\n${t.whatsapp_unassigned} (${unassigned.length}): ${unassigned.map(p => p.name).join(', ')}`;
  }
  
  return text;
}

// RENDERING TAB 2: HISTORIAL
function renderHistorial() {
  const lang = state.lang || 'eu';
  const t = TRANSLATIONS[lang];
  const timeline = document.getElementById('history-timeline');
  const emptyState = document.getElementById('history-empty-state');
  const clearBtn = document.getElementById('btn-clear-history');

  if (state.rounds.length === 0) {
    timeline.innerHTML = '';
    emptyState.classList.remove('hidden');
    clearBtn.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  clearBtn.classList.remove('hidden');
  timeline.innerHTML = '';

  state.rounds.forEach(round => {
    const card = document.createElement('div');
    
    // Check if it's a "A lolos!" finished day divider
    if (round.isDivider) {
      card.className = 'card glass-card history-divider-card';
      card.innerHTML = `
        <div class="divider-content">
          <span class="divider-text">
            <span>🛌</span>
            <span>${lang === 'eu' ? TRANSLATIONS.eu.jornada_ended : TRANSLATIONS.es.jornada_ended}</span>
          </span>
          <span class="divider-time">🕒 ${round.timestamp} - ${round.date}</span>
        </div>
        <button class="btn-action-delete" data-round-id="${round.id}" title="${t.history_delete_tooltip}" aria-label="${t.history_delete_tooltip}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      // Event listener: delete only
      card.querySelector(`[data-round-id="${round.id}"]`).addEventListener('click', () => {
        deletePastRound(round.id);
      });

      timeline.appendChild(card);
      return; // Skip normal rendering
    }

    card.className = 'card glass-card history-card';

    // Build orders list markup
    let ordersMarkup = '';
    let summaryArr = [];
    const counts = {};

    Object.keys(round.orders).forEach(pId => {
      const person = state.people.find(p => p.id === pId) || { name: t.history_person_fallback };
      const dId = round.orders[pId];
      const drink = state.drinks.find(d => d.id === dId) || { name: t.history_drink_fallback };

      ordersMarkup += `
        <div class="history-order-item">
          <span class="history-order-person">${person.name}</span>
          <span class="history-order-drink">${drink.name}</span>
        </div>
      `;

      counts[drink.name] = (counts[drink.name] || 0) + 1;
    });

    Object.keys(counts).forEach(drinkName => {
      summaryArr.push(`${counts[drinkName]} ${drinkName}`);
    });

    const summaryText = summaryArr.join(', ');

    card.innerHTML = `
      <div class="history-header-row">
        <div>
          <h3 class="history-bar-name">${round.barName}</h3>
          <span class="history-time">${t.history_saved_at(round.timestamp)}</span>
        </div>
        <button class="btn-action-delete" data-round-id="${round.id}" title="${t.history_delete_tooltip}" aria-label="${t.history_delete_tooltip}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
      <div class="history-orders-list">
        ${ordersMarkup}
      </div>
      <div class="history-footer">
        <span class="history-summary-text" title="${summaryText}">${summaryText}</span>
        <div class="history-actions">
          <button class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem;" data-repeat-id="${round.id}">
            ${t.btn_repeat_round}
          </button>
        </div>
      </div>
    `;

    // Repeat Round Listener: copies bar content to active round
    card.querySelector(`[data-repeat-id="${round.id}"]`).addEventListener('click', () => {
      repeatPastRound(round);
    });

    // Delete round item from history
    card.querySelector(`[data-round-id="${round.id}"]`).addEventListener('click', () => {
      deletePastRound(round.id);
    });

    timeline.appendChild(card);
  });
}

function repeatPastRound(round) {
  const t = TRANSLATIONS[state.lang];
  if (confirm(t.confirm_repeat_round(round.barName))) {
    state.currentOrders = {};
    
    // Loop through past round members, set their global state as active and allocate their drink
    Object.keys(round.orders).forEach(pId => {
      const person = state.people.find(p => p.id === pId);
      if (person) {
        person.active = true;
      }
      state.currentOrders[pId] = round.orders[pId];
    });

    saveState();
    renderAll();
    
    showToast(t.toast_round_restored);
    
    // Switch to active round
    document.getElementById('tab-btn-ronda').click();
  }
}

function deletePastRound(roundId) {
  const t = TRANSLATIONS[state.lang];
  if (confirm(t.confirm_delete_round)) {
    state.rounds = state.rounds.filter(r => r.id !== roundId);
    saveState();
    renderHistorial();
    showToast(t.toast_round_removed);
  }
}

// RENDERING TAB 3: CUADRILLA (AMIGOS)
function renderCuadrilla() {
  const t = TRANSLATIONS[state.lang];
  const peopleList = document.getElementById('people-list');
  const countLabel = document.getElementById('total-people-count');
  
  countLabel.innerText = t.friends_count(state.people.length);
  peopleList.innerHTML = '';

  if (state.people.length === 0) {
    peopleList.innerHTML = `
      <div class="empty-state">
        <p>${t.cuadrilla_empty}</p>
      </div>
    `;
    return;
  }

  state.people.forEach(person => {
    const row = document.createElement('div');
    row.className = 'entity-row';

    const drinkObj = state.drinks.find(d => d.id === person.defaultDrinkId);
    const drinkName = drinkObj ? drinkObj.name : t.friend_preference_none;

    const initials = person.name.trim().charAt(0).toUpperCase() || '?';
    const avatarColor = getAvatarColor(person.name);

    row.innerHTML = `
      <div class="entity-left-area">
        <div class="entity-avatar" data-avatar-person-id="${person.id}" title="Ver foto">
          <span class="avatar-initials" style="background-color: ${avatarColor}">${initials}</span>
        </div>
        <div class="entity-info">
          <span class="entity-title">${person.name}</span>
          <span class="entity-subtitle">${t.friend_preference_label} ${drinkName}</span>
        </div>
      </div>
      <div class="entity-actions">
        <label class="switch-control" title="${t.tab_cuadrilla}">
          <input type="checkbox" ${person.active ? 'checked' : ''} data-person-toggle-id="${person.id}">
          <span class="slider"></span>
        </label>
        <button class="btn-action-edit" data-edit-person-id="${person.id}" aria-label="${t.modal_person_edit}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <button class="btn-action-delete" data-delete-person-id="${person.id}" aria-label="${t.btn_mini_remove}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    // Asynchronously load avatar image from IndexedDB
    getPhoto(person.id).then(photoUrl => {
      if (photoUrl) {
        const avatarEl = row.querySelector(`[data-avatar-person-id="${person.id}"]`);
        if (avatarEl) {
          avatarEl.innerHTML = `<img src="${photoUrl}" class="avatar-img" alt="${person.name}">`;
        }
      }
    });

    // Lightbox modal zoom trigger
    const avatarEl = row.querySelector(`[data-avatar-person-id="${person.id}"]`);
    if (avatarEl) {
      avatarEl.addEventListener('click', (e) => {
        e.stopPropagation();
        getPhoto(person.id).then(photoUrl => {
          if (photoUrl) {
            openLightbox(photoUrl, person.name);
          } else {
            // Show toast if no photo is configured, prompting them to add one
            const tipMsg = state.lang === 'eu' ? "Editatu laguna bere argazkia igotzeko!" : "¡Edita el amigo para subir su foto!";
            showToast(tipMsg, 'info');
          }
        });
      });
    }

    // Listeners for active toggle
    row.querySelector(`[data-person-toggle-id="${person.id}"]`).addEventListener('change', (e) => {
      person.active = e.target.checked;
      if (person.active) {
        state.currentOrders[person.id] = person.defaultDrinkId || (state.drinks[0] ? state.drinks[0].id : '');
      } else {
        delete state.currentOrders[person.id];
      }
      saveState();
      renderRonda(); // Sync current round
      showToast(t.toast_friend_active_status(person.name, person.active));
    });

    // Listeners for Edit & Delete
    row.querySelector(`[data-edit-person-id="${person.id}"]`).addEventListener('click', () => {
      editPerson(person);
    });

    row.querySelector(`[data-delete-person-id="${person.id}"]`).addEventListener('click', () => {
      deletePerson(person.id);
    });

    peopleList.appendChild(row);
  });
}

// RENDERING TAB 4: BEBIDAS
function renderBebidas() {
  const t = TRANSLATIONS[state.lang];
  const drinksList = document.getElementById('drinks-list');
  const countLabel = document.getElementById('total-drinks-count');

  countLabel.innerText = t.drinks_count(state.drinks.length);
  drinksList.innerHTML = '';

  if (state.drinks.length === 0) {
    drinksList.innerHTML = `
      <div class="empty-state">
        <p>${t.bebidas_empty}</p>
      </div>
    `;
    return;
  }

  state.drinks.forEach(drink => {
    const row = document.createElement('div');
    row.className = 'entity-row';

    row.innerHTML = `
      <div class="entity-info">
        <span class="entity-title">${drink.name}</span>
        <span class="entity-subtitle">${t.drink_category_label} ${drink.category || t.drink_category_default}</span>
      </div>
      <div class="entity-actions">
        <button class="btn-action-edit" data-edit-drink-id="${drink.id}" aria-label="${t.modal_drink_edit}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <button class="btn-action-delete" data-delete-drink-id="${drink.id}" aria-label="${t.btn_mini_remove}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    row.querySelector(`[data-edit-drink-id="${drink.id}"]`).addEventListener('click', () => {
      editDrink(drink);
    });

    row.querySelector(`[data-delete-drink-id="${drink.id}"]`).addEventListener('click', () => {
      deleteDrink(drink.id);
    });

    drinksList.appendChild(row);
  });
}

/* BOTTOM SHEET & MODAL OPERATIONS */

// Bottom Sheet for Drink Picker (Ronda View)
function openDrinkSheet(personId) {
  const t = TRANSLATIONS[state.lang];
  activeSelectPersonId = personId;
  const person = state.people.find(p => p.id === personId);
  const currentDrinkId = state.currentOrders[personId];
  
  const title = document.getElementById('drink-sheet-title');
  const initials = person.name.trim().charAt(0).toUpperCase() || '?';
  const avatarColor = getAvatarColor(person.name);
  
  title.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <div class="entity-avatar mini" id="sheet-avatar" style="cursor: default;">
        <span class="avatar-initials" style="background-color: ${avatarColor}">${initials}</span>
      </div>
      <span>${t.sheet_title(person.name)}</span>
    </div>
  `;
  
  getPhoto(person.id).then(photoUrl => {
    if (photoUrl) {
      const sheetAvatar = document.getElementById('sheet-avatar');
      if (sheetAvatar) {
        sheetAvatar.innerHTML = `<img src="${photoUrl}" class="avatar-img" alt="${person.name}">`;
      }
    }
  });

  const grid = document.getElementById('sheet-drink-grid');
  grid.innerHTML = '';

  state.drinks.forEach(drink => {
    const item = document.createElement('button');
    item.className = `btn-drink-select-item ${drink.id === currentDrinkId ? 'selected' : ''}`;
    
    item.innerHTML = `
      <span class="drink-select-name">${drink.name}</span>
      <span class="drink-select-cat">${drink.category || t.drink_category_default}</span>
    `;

    item.addEventListener('click', () => {
      selectDrinkForPerson(drink.id);
    });

    grid.appendChild(item);
  });

  const backdrop = document.getElementById('drink-sheet-backdrop');
  backdrop.classList.add('active');
  
  // Set aria active state
  const btn = document.querySelector(`.btn-select-drink[data-person-id="${personId}"]`);
  if (btn) {
    btn.setAttribute('aria-expanded', 'true');
  }
}

function selectDrinkForPerson(drinkId) {
  if (activeSelectPersonId) {
    state.currentOrders[activeSelectPersonId] = drinkId;
    
    // Auto sync back to their default drink favorite as well for future references!
    const person = state.people.find(p => p.id === activeSelectPersonId);
    if (person) {
      person.defaultDrinkId = drinkId;
    }
    
    saveState();
    renderRonda();
    closeDrinkSheet();
  }
}

function closeDrinkSheet() {
  const backdrop = document.getElementById('drink-sheet-backdrop');
  backdrop.classList.remove('active');
  
  if (activeSelectPersonId) {
    const btn = document.querySelector(`.btn-select-drink[data-person-id="${activeSelectPersonId}"]`);
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
    }
  }
  activeSelectPersonId = null;
}

// Person Modals CRUD helper
function preparePersonModal() {
  const t = TRANSLATIONS[state.lang];
  document.getElementById('modal-person-title').innerText = t.modal_person_add;
  document.getElementById('btn-submit-person').innerText = t.btn_add;
  document.getElementById('edit-person-id').value = "";
  document.getElementById('input-person-name').value = "";
  document.getElementById('input-person-name').placeholder = t.modal_label_name_placeholder;
  
  // Clear any temporary photo state
  tempPersonPhotoDataUrl = null;
  const inputPhotoCamera = document.getElementById('input-person-photo-camera');
  const inputPhotoGallery = document.getElementById('input-person-photo-gallery');
  if (inputPhotoCamera) inputPhotoCamera.value = "";
  if (inputPhotoGallery) inputPhotoGallery.value = "";
  updateAvatarEditPreview(null);
  
  populateDefaultDrinkDropdown();
}

function populateDefaultDrinkDropdown(selectedId = '') {
  const t = TRANSLATIONS[state.lang];
  const select = document.getElementById('select-default-drink');
  select.innerHTML = `<option value="">${t.modal_option_no_fav}</option>`;
  
  state.drinks.forEach(drink => {
    const opt = document.createElement('option');
    opt.value = drink.id;
    opt.innerText = `${drink.name} [${drink.category || t.drink_category_default}]`;
    if (drink.id === selectedId) opt.selected = true;
    select.appendChild(opt);
  });
}

function editPerson(person) {
  const t = TRANSLATIONS[state.lang];
  document.getElementById('modal-person-title').innerText = t.modal_person_edit;
  document.getElementById('btn-submit-person').innerText = t.btn_save;
  document.getElementById('edit-person-id').value = person.id;
  document.getElementById('input-person-name').value = person.name;
  document.getElementById('input-person-name').placeholder = t.modal_label_name_placeholder;
  
  // Reset input file and temp storage
  tempPersonPhotoDataUrl = null;
  const inputPhotoCamera = document.getElementById('input-person-photo-camera');
  const inputPhotoGallery = document.getElementById('input-person-photo-gallery');
  if (inputPhotoCamera) inputPhotoCamera.value = "";
  if (inputPhotoGallery) inputPhotoGallery.value = "";
  
  // Load photo from IndexedDB and update edit preview
  getPhoto(person.id).then(photoUrl => {
    tempPersonPhotoDataUrl = photoUrl || null;
    updateAvatarEditPreview(photoUrl);
  });
  
  populateDefaultDrinkDropdown(person.defaultDrinkId);
  openModal('modal-person');
}

function savePersonSubmit() {
  const t = TRANSLATIONS[state.lang];
  const name = document.getElementById('input-person-name').value.trim();
  const defaultDrinkId = document.getElementById('select-default-drink').value;
  const editId = document.getElementById('edit-person-id').value;

  if (!name) return;

  if (editId) {
    // Modify existing
    const person = state.people.find(p => p.id === editId);
    if (person) {
      person.name = name;
      person.defaultDrinkId = defaultDrinkId || null;
      
      // Update in active round orders if active
      if (person.active && defaultDrinkId) {
        state.currentOrders[person.id] = defaultDrinkId;
      }
    }
    
    // Save or delete photo as needed
    if (tempPersonPhotoDataUrl) {
      savePhoto(editId, tempPersonPhotoDataUrl).then(() => {
        renderAll();
      });
    } else {
      deletePhoto(editId).then(() => {
        renderAll();
      });
    }
    
    showToast(t.toast_friend_edited(name));
  } else {
    // Add new
    const newPersonId = 'p-' + Date.now();
    const newPerson = {
      id: newPersonId,
      name: name,
      active: true, // Start active so they join the party!
      defaultDrinkId: defaultDrinkId || null
    };
    state.people.push(newPerson);
    
    // Add to active orders
    state.currentOrders[newPerson.id] = defaultDrinkId || (state.drinks[0] ? state.drinks[0].id : '');
    
    // Save photo to IndexedDB if it was captured
    if (tempPersonPhotoDataUrl) {
      savePhoto(newPersonId, tempPersonPhotoDataUrl).then(() => {
        renderAll();
      });
    }
    
    showToast(t.toast_friend_added(name));
  }

  saveState();
  closeModal('modal-person');
  renderAll();
}

function deletePerson(personId) {
  const t = TRANSLATIONS[state.lang];
  const person = state.people.find(p => p.id === personId);
  if (!person) return;

  if (confirm(t.confirm_delete_friend(person.name))) {
    state.people = state.people.filter(p => p.id !== personId);
    delete state.currentOrders[personId];
    
    // Delete their associated photo from IndexedDB
    deletePhoto(personId).catch(err => console.error("Error deleting avatar:", err));
    
    saveState();
    renderAll();
    showToast(t.toast_friend_removed);
  }
}


// Drink Modals CRUD helper
function prepareDrinkModal() {
  const t = TRANSLATIONS[state.lang];
  document.getElementById('modal-drink-title').innerText = t.modal_drink_add;
  document.getElementById('btn-submit-drink').innerText = t.btn_add;
  document.getElementById('edit-drink-id').value = "";
  document.getElementById('input-drink-name').value = "";
  document.getElementById('input-drink-name').placeholder = t.modal_drink_label_name_placeholder;
  document.getElementById('input-drink-category').value = "";
  document.getElementById('input-drink-category').placeholder = t.modal_drink_label_cat_placeholder;
}

function editDrink(drink) {
  const t = TRANSLATIONS[state.lang];
  document.getElementById('modal-drink-title').innerText = t.modal_drink_edit;
  document.getElementById('btn-submit-drink').innerText = t.btn_save;
  document.getElementById('edit-drink-id').value = drink.id;
  document.getElementById('input-drink-name').value = drink.name;
  document.getElementById('input-drink-name').placeholder = t.modal_drink_label_name_placeholder;
  document.getElementById('input-drink-category').value = drink.category || "";
  document.getElementById('input-drink-category').placeholder = t.modal_drink_label_cat_placeholder;
  
  openModal('modal-drink');
}

function saveDrinkSubmit() {
  const t = TRANSLATIONS[state.lang];
  const name = document.getElementById('input-drink-name').value.trim();
  const category = document.getElementById('input-drink-category').value.trim();
  const editId = document.getElementById('edit-drink-id').value;

  if (!name) return;

  if (editId) {
    // Edit existing
    const drink = state.drinks.find(d => d.id === editId);
    if (drink) {
      drink.name = name;
      drink.category = category || null;
    }
    showToast(t.toast_drink_edited(name));
  } else {
    // Add new
    const newDrink = {
      id: 'd-' + Date.now(),
      name: name,
      category: category || null
    };
    state.drinks.push(newDrink);
    showToast(t.toast_drink_added(name));
  }

  saveState();
  closeModal('modal-drink');
  renderAll();
}

function deleteDrink(drinkId) {
  const t = TRANSLATIONS[state.lang];
  const drink = state.drinks.find(d => d.id === drinkId);
  if (!drink) return;

  if (confirm(t.confirm_delete_drink(drink.name))) {
    // Check if people reference this drink as favorite and clean it
    state.people.forEach(p => {
      if (p.defaultDrinkId === drinkId) p.defaultDrinkId = null;
    });

    // Check if active orders reference this drink, swap it to another or delete
    Object.keys(state.currentOrders).forEach(pId => {
      if (state.currentOrders[pId] === drinkId) {
        state.currentOrders[pId] = state.drinks.find(d => d.id !== drinkId)?.id || '';
      }
    });

    state.drinks = state.drinks.filter(d => d.id !== drinkId);
    
    saveState();
    renderAll();
    showToast(t.toast_drink_removed);
  }
}
