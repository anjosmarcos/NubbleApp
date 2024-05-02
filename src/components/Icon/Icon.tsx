import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/theme";
import { HomeFillIcon } from "../../assets/icons/HomeFillIcon";
import { BookmarkFillIcon } from "../../assets/icons/BookmarkFillIcon";
import { ProfileFillIcon } from "../../assets/icons/ProfileFillIcon";
import { HeartFillIcon } from "../../assets/icons/HeartFillIcon";
import { BellOnIcon } from "../../assets/icons/BellOnIcon";
import { BellOffIcon } from "../../assets/icons/BellOff";
import { ChatOnIcon } from "../../assets/icons/ChatOnIcon";
import { ChatOffIcon } from "../../assets/icons/ChatIcon";
import { CommentIcon } from "../../assets/icons/Comment";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowLightIcon } from "../../assets/icons/ArrowLightIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { MoreIcon } from "../../assets/icons/MoreIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { NewPostIcon } from "../../assets/icons/newPostIcon";
import { CameraIcon } from "../../assets/icons/CameraIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { ChevronRightIcon } from "../../assets/icons/ChevronRightIcon";
import { FlashOffIcon } from "../../../FlashOffIcon";
import { FlashOnIcon } from "../../assets/icons/FlashOnIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { SendIcon } from "../../assets/icons/SendIcon";

export interface IconBase {
    size?: number;
    color?: string;
}

interface Props {
    name: IconName;
    color?: ThemeColors;
    size?: number;
}

export function Icon({ name, color = 'backgroundContrast', size }: Props) {
    const SVGIcon = iconRegistry[name]
    const { colors } = useAppTheme()

    return <SVGIcon color={colors[color]} size={size} />;
}


// Mapeamento dos icons
const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon,
    homeFill: HomeFillIcon,
    bookmarkFill: BookmarkFillIcon,
    profileFill: ProfileFillIcon,
    heartFill: HeartFillIcon,
    bellOn: BellOnIcon,
    bellOff: BellOffIcon,
    chatOn: ChatOnIcon,
    chatOff: ChatOffIcon,
    comment: CommentIcon,
    arrowLeft: ArrowLeftIcon,
    arrowLight: ArrowLightIcon,
    settings: SettingsIcon,
    more: MoreIcon,
    home: HomeIcon,
    bookmark: BookmarkIcon,
    profile: ProfileIcon,
    heart: HeartIcon,
    newPost: NewPostIcon,
    camera: CameraIcon,
    search: SearchIcon,
    message: MessageIcon,
    check: CheckIcon,
    chevronRight: ChevronRightIcon,
    flashOff: FlashOffIcon,
    flashOn: FlashOnIcon,
    Trash: TrashIcon,
    send: SendIcon,

}

// Extraindo as chaves
type IconType = typeof iconRegistry
type IconName = keyof IconType