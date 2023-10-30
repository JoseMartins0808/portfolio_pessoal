import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
    title: string;
    icon: string | IconType;
    key: string;
}

export const ProjectStackItems = (
    { title, icon: Icon }: StackProps,
    key: string
): JSX.Element => {
    const isString = typeof Icon === "string";

    return (
        <StackCard key={key}>
            <Text>{title}</Text>
            {isString ? (
                <img src={Icon} alt={title} title={title} height="20px" width="20px" />
            ) : (
                <Icon size={20} />
            )}
        </StackCard>
    );
};