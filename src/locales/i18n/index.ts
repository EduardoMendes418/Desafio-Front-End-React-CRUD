import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      appName: "UserManager",
      appDescription: "User Management System",
      loading: "Loading...",
      search: "Search...",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      create: "Create",
      update: "Update",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",

      newUser: "New User",
      resetData: "Reset Data",

      totalUsers: "Total Users",
      activeUsers: "Active Users",
      withEmail: "With Email",
      withWebsite: "With Website",

      userForm: {
        newUser: "New User",
        editUser: "Edit User",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        website: "Website",
        namePlaceholder: "Enter full name",
        emailPlaceholder: "Enter email",
        phonePlaceholder: "Enter phone number",
        websitePlaceholder: "Enter website",
        requiredField: "Required field",
        creating: "Creating...",
        updating: "Updating...",
      },

      noUsersFound: "No users found",
      startAdding: "Start by adding your first user to the system",
      noSearchResults: "No users found with the search criteria",
      loadingUsers: "Loading users...",
      pleaseWait: "Please wait while we fetch the information",

      deleteConfirm: "Are you sure you want to delete this user?",
      resetConfirm:
        "Do you want to restore initial data? This will replace all current users.",

      toast: {
        userCreated: "User created successfully!",
        userUpdated: "User updated successfully!",
        userDeleted: "User deleted successfully!",
        dataReset: "Data reset to initial state!",
        error: "An error occurred!",
      },
    },
  },
  pt: {
    translation: {
      appName: "UserManager",
      appDescription: "Sistema de Gerenciamento de Usuários",
      loading: "Carregando...",
      search: "Buscar...",
      cancel: "Cancelar",
      save: "Salvar",
      edit: "Editar",
      delete: "Excluir",
      create: "Criar",
      update: "Atualizar",
      confirm: "Confirmar",
      yes: "Sim",
      no: "Não",

      newUser: "Novo Usuário",
      resetData: "Resetar Dados",

      totalUsers: "Total de Usuários",
      activeUsers: "Usuários Ativos",
      withEmail: "Com Email",
      withWebsite: "Com Website",

      userForm: {
        newUser: "Novo Usuário",
        editUser: "Editar Usuário",
        name: "Nome Completo",
        email: "Email",
        phone: "Telefone",
        website: "Website",
        namePlaceholder: "Digite o nome completo",
        emailPlaceholder: "Digite o email",
        phonePlaceholder: "Digite o telefone",
        websitePlaceholder: "Digite o website",
        requiredField: "Campo obrigatório",
        creating: "Criando...",
        updating: "Atualizando...",
      },

      noUsersFound: "Nenhum usuário encontrado",
      startAdding: "Comece adicionando seu primeiro usuário ao sistema",
      noSearchResults: "Não encontramos usuários com os critérios de busca",
      loadingUsers: "Carregando usuários...",
      pleaseWait: "Aguarde enquanto buscamos as informações",

      deleteConfirm: "Tem certeza que deseja excluir este usuário?",
      resetConfirm:
        "Deseja restaurar os dados iniciais? Isso substituirá todos os usuários atuais.",

      toast: {
        userCreated: "Usuário criado com sucesso!",
        userUpdated: "Usuário atualizado com sucesso!",
        userDeleted: "Usuário excluído com sucesso!",
        dataReset: "Dados resetados para o estado inicial!",
        error: "Ocorreu um erro!",
      },
    },
  },
  es: {
    translation: {
      appName: "UserManager",
      appDescription: "Sistema de Gestión de Usuarios",
      loading: "Cargando...",
      search: "Buscar...",
      cancel: "Cancelar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      create: "Crear",
      update: "Actualizar",
      confirm: "Confirmar",
      yes: "Sí",
      no: "No",

      newUser: "Nuevo Usuario",
      resetData: "Restablecer Datos",

      totalUsers: "Total de Usuarios",
      activeUsers: "Usuarios Activos",
      withEmail: "Con Email",
      withWebsite: "Con Sitio Web",

      userForm: {
        newUser: "Nuevo Usuario",
        editUser: "Editar Usuario",
        name: "Nombre Completo",
        email: "Email",
        phone: "Teléfono",
        website: "Sitio Web",
        namePlaceholder: "Ingrese el nombre completo",
        emailPlaceholder: "Ingrese el email",
        phonePlaceholder: "Ingrese el teléfono",
        websitePlaceholder: "Ingrese el sitio web",
        requiredField: "Campo obligatorio",
        creating: "Creando...",
        updating: "Actualizando...",
      },

      noUsersFound: "No se encontraron usuarios",
      startAdding: "Comience agregando su primer usuario al sistema",
      noSearchResults: "No encontramos usuarios con los criterios de búsqueda",
      loadingUsers: "Cargando usuarios...",
      pleaseWait: "Espere mientras buscamos la información",

      deleteConfirm: "¿Está seguro de que desea eliminar este usuario?",
      resetConfirm:
        "¿Desea restaurar los datos iniciales? Esto reemplazará todos los usuarios actuales.",

      toast: {
        userCreated: "¡Usuario creado con éxito!",
        userUpdated: "¡Usuario actualizado con éxito!",
        userDeleted: "¡Usuario eliminado con éxito!",
        dataReset: "¡Datos restablecidos al estado inicial!",
        error: "¡Ocurrió un error!",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
