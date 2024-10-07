import Image from "next/image"
import { Button} from "./ui/button"

interface ButtonProps {
    isLoading: boolean,
    classname?: string,
    children: React.ReactNode
}

const SubmitButton = ({isLoading, classname, children} : ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={classname ?? "shad-primary-btn w-full"}>
        {isLoading ? 
        <div className="flex items-center gap-4">
            <Image 
            src={"/assets/icons/loader.svg"}
            width={24}
            height={24}
            alt="loader"
            className="animate-spin"
            />
            Loading...
        </div>
        : children}

    </Button>
  )
}

export default SubmitButton