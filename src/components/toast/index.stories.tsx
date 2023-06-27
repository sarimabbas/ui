import { Button } from "@/components/ui/button";
import { toast } from "@/components/toast";

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
