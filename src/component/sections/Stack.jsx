import { useState } from "react";
import { StackInfo } from "../utils/StackInfo";

export default function StackDetails() {

    const [currentImages, setCurrentImages] = useState(
        StackInfo.map(() => 0)
    );

    const handlePrev = (projectIndex, imagesLength) => {
        setCurrentImages((prev) =>
            prev.map((imgIndex, i) =>
                i === projectIndex
                    ? imgIndex === 0
                        ? imagesLength - 1
                        : imgIndex - 1
                    : imgIndex
            )
        );
    };

    const handleNext = (projectIndex, imagesLength) => {
        setCurrentImages((prev) =>
            prev.map((imgIndex, i) =>
                i === projectIndex
                    ? imgIndex === imagesLength - 1
                        ? 0
                        : imgIndex + 1
                    : imgIndex
            )
        );
    };

    return (
        <div className="flex flex-col items-start justify-start gap-4">
            {StackInfo.map((project, index) => {

                return (
                    <div key={project.id} className="">

                        <div className="flex flex-row items-center gap-2">
                            <div className="w-8 h-auto">
                                {project.stacks?.map((item, i) => (
                                    <div key={i}>
                                        {item.isImage ? (
                                            <img src={item.stack} alt={project.name} />
                                        ) : (
                                            item.stack
                                        )}
                                    </div>
                                ))}
                            </div>
                            <h5 className="font-bold">{project.name}</h5>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-2">
                            {project.icons?.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-row items-center p-2 gap-2 bg-black  ${item.IconColor}`}
                                >
                                    <div className="flex items-center justify-center w-8 h-auto">
                                        {item.isImage ? (
                                            <img src={item.icon} alt={item.textSvg} className="object-contain w-6 h-auto invert" />
                                        ) : (
                                            item.icon
                                        )}
                                    </div>
                                    <span className="text-sm font-bold text-white uppercase">{item.textSvg}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
