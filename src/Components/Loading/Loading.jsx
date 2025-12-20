import { useUsers } from "../../context/UsersContext";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const Loading = () => {
  const { loading } = useUsers();  
  if (!loading) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="flex justify-center items-center h-screen backdrop-blur-sm bg-black/10"
    >
      <CgSpinnerTwoAlt size={50} className="animate-spin text-black" />
    </motion.div>
  );
};

export default Loading;
