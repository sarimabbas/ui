import { Button } from "./button";
import { toast } from "./toast";

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.success("Friday, February 10, 2023 at 5:57 PM");
      }}
    >
      Add to calendar
    </Button>
  );
}
