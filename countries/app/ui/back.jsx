import { ArrowLeftIcon } from "@heroicons/react/24/outline";


const BackAction = () => {
    return (
        <>
            <button className="flex gap-2 items-center text-sm desktop:text-base px-6 py-2 shadow-3xl dark:bg-darkmodeBlue">
                <ArrowLeftIcon className="size-4 desktop:size-5"/>
                Back
            </button>
        </>
    )
};

export default BackAction