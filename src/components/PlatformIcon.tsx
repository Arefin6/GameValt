import { Platform } from "@/hooks/useGame";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent: IconType = iconMap[platform.slug] ?? BsGlobe; // fallback
        return <Icon key={platform.id} as={IconComponent} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatformIcon;
