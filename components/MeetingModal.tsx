import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface MeetingModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  title: string;
  buttonText: string;
  handleClick: () => void;
  children?: ReactNode;
}

const MeetingModal = ({
  open,
  onClose,
  className,
  title,
  buttonText,
  handleClick,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`${className} bg-dark-blue-1 text-white border-none`}
      >
        <div className="flex flex-col gap-6">
          <DialogTitle>
            <p className="heading">{title}</p>
          </DialogTitle>

          {children}
          <Button className="bg-blue-1 hover:bg-blue-600" onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
