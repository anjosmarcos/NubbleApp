import React from "react";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowLightIcon } from "../../assets/icons/ArrowLightIcon";
import { BellOffIcon } from "../../assets/icons/BellOff";
import { BellOnIcon } from "../../assets/icons/BellOnIcon";
import { BookmarkFillIcon } from "../../assets/icons/BookmarkFillIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { CameraIcon } from "../../assets/icons/CameraIcon";
import { ChatOffIcon } from "../../assets/icons/ChatIcon";
import { ChatOnIcon } from "../../assets/icons/ChatOnIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { ChevronRightIcon } from "../../assets/icons/ChevronRightIcon";
import { CommentIcon } from "../../assets/icons/Comment";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { FlashOffIcon } from "../../assets/icons/FlashOffIcon";
import { FlashOnIcon } from "../../assets/icons/FlashOnIcon";
import { HeartFillIcon } from "../../assets/icons/HeartFillIcon";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { HomeFillIcon } from "../../assets/icons/HomeFillIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { MoreIcon } from "../../assets/icons/MoreIcon";
import { NewPostIcon } from "../../assets/icons/newPostIcon";
import { ProfileFillIcon } from "../../assets/icons/ProfileFillIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { SendIcon } from "../../assets/icons/SendIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/theme";

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