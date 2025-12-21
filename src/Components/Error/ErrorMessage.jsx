import { useUsers } from "../../Hooks"

const ErrorMessage = () => {
  const {error} = useUsers()
  if(!error) return null;

  return (
    <div className="w-full flex items-center justify-center bg-white h-screen">
      <h2 className="text-2xl font-bold inline-flex text-gray-700 text-justify whitespace-nowrap
       italic " >{error?.uiMessage || "somthing went wrong"}</h2>
    </div>
  )
}

export default ErrorMessage