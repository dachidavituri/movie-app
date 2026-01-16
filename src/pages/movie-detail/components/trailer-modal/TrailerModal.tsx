import { AnimatePresence, motion } from "framer-motion";
import type { TrailerModalProps } from "./index.types";

const TrailerModal: React.FC<TrailerModalProps> = ({
  show,
  trailerKey,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrailerModal;
