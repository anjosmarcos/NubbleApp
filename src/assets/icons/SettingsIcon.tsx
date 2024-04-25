import React from "react";
import { IconBase } from "../../components/Icon/Icon";
import { Path, Svg } from "react-native-svg";

export function SettingsIcon({ color = 'black', size = 20 }: IconBase) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M7.93 19L7.48 16.165C7.195 16.06 6.895 15.9175 6.58 15.7375C6.265 15.5575 5.9875 15.37 5.7475 15.175L3.0925 16.39L1 12.7L3.43 10.9225C3.4 10.7875 3.38125 10.6337 3.37375 10.4613C3.36625 10.2888 3.3625 10.135 3.3625 10C3.3625 9.865 3.36625 9.71125 3.37375 9.53875C3.38125 9.36625 3.4 9.2125 3.43 9.0775L1 7.3L3.0925 3.61L5.7475 4.825C5.9875 4.63 6.265 4.4425 6.58 4.2625C6.895 4.0825 7.195 3.9475 7.48 3.8575L7.93 1H12.07L12.52 3.835C12.805 3.94 13.1088 4.07875 13.4313 4.25125C13.7538 4.42375 14.0275 4.615 14.2525 4.825L16.9075 3.61L19 7.3L16.57 9.0325C16.6 9.1825 16.6188 9.34375 16.6263 9.51625C16.6338 9.68875 16.6375 9.85 16.6375 10C16.6375 10.15 16.6338 10.3075 16.6263 10.4725C16.6188 10.6375 16.6 10.795 16.57 10.945L19 12.7L16.9075 16.39L14.2525 15.175C14.0125 15.37 13.7388 15.5613 13.4313 15.7488C13.1238 15.9363 12.82 16.075 12.52 16.165L12.07 19H7.93ZM10 12.925C10.81 12.925 11.5 12.64 12.07 12.07C12.64 11.5 12.925 10.81 12.925 10C12.925 9.19 12.64 8.5 12.07 7.93C11.5 7.36 10.81 7.075 10 7.075C9.19 7.075 8.5 7.36 7.93 7.93C7.36 8.5 7.075 9.19 7.075 10C7.075 10.81 7.36 11.5 7.93 12.07C8.5 12.64 9.19 12.925 10 12.925ZM10 11.575C9.565 11.575 9.19375 11.4213 8.88625 11.1138C8.57875 10.8063 8.425 10.435 8.425 10C8.425 9.565 8.57875 9.19375 8.88625 8.88625C9.19375 8.57875 9.565 8.425 10 8.425C10.435 8.425 10.8063 8.57875 11.1138 8.88625C11.4213 9.19375 11.575 9.565 11.575 10C11.575 10.435 11.4213 10.8063 11.1138 11.1138C10.8063 11.4213 10.435 11.575 10 11.575ZM9.01 17.65H10.99L11.305 15.13C11.8 15.01 12.2688 14.8225 12.7113 14.5675C13.1538 14.3125 13.555 14.005 13.915 13.645L16.3 14.68L17.2 13.06L15.085 11.5075C15.145 11.2525 15.1938 11.0013 15.2313 10.7538C15.2688 10.5063 15.2875 10.255 15.2875 10C15.2875 9.745 15.2725 9.49375 15.2425 9.24625C15.2125 8.99875 15.16 8.7475 15.085 8.4925L17.2 6.94L16.3 5.32L13.915 6.355C13.57 5.965 13.18 5.63875 12.745 5.37625C12.31 5.11375 11.83 4.945 11.305 4.87L10.99 2.35H9.01L8.695 4.87C8.185 4.975 7.70875 5.155 7.26625 5.41C6.82375 5.665 6.43 5.98 6.085 6.355L3.7 5.32L2.8 6.94L4.915 8.4925C4.855 8.7475 4.80625 8.99875 4.76875 9.24625C4.73125 9.49375 4.7125 9.745 4.7125 10C4.7125 10.255 4.73125 10.5063 4.76875 10.7538C4.80625 11.0013 4.855 11.2525 4.915 11.5075L2.8 13.06L3.7 14.68L6.085 13.645C6.445 14.005 6.84625 14.3125 7.28875 14.5675C7.73125 14.8225 8.2 15.01 8.695 15.13L9.01 17.65Z"
                fill={color} />
        </Svg>

    )
}