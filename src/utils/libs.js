import Swal from "sweetalert2";
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const storedItem = localStorage.getItem(key);
  return JSON.parse(storedItem);
};

export const swal = (title, text, icon) => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};

export const confirmation = (title, text, icon) => {
  return Swal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText: "Yes",
  });
};
