import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
  setModalStack: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Stack = (
  { title, icon: Icon, setModalStack }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <StackCard key={key} onClick={() => setModalStack(true)}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="50px" width="50px" />
      ) : (
        <Icon size={50} />
      )}
    </StackCard>
  );
};
