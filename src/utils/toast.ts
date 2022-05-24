import { toast } from "react-toastify";

export function customToast(msg: string, type: string) {
  switch (type) {
    case "Success":
      toast.success(msg, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "Error":
      toast.error(msg, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
  }
}
