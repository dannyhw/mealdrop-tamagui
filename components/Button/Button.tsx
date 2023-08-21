import React, { ReactNode, useMemo } from "react";
import {
  Button as TButton,
  ButtonProps as TButtonProps,
  styled,
} from "tamagui";

// export const Button = styled(TButton, {
//   variants: {
//     clear: {
//       true: {
//         color: "$primaryText",
//         backgroundColor: "$buttonClear",
//         // animation: "quick",
//         pressStyle: {
//           backgroundColor: "$buttonClearHover",
//           // shadowColor: "#8eb1b6",
//           // shadowOffset: {
//           //   width: 0,
//           //   height: 1,
//           // },
//           // shadowOpacity: 0.18,
//           // shadowRadius: 1,

//           // elevation: 1,
//         },
//       },
//       false: {
//         color: "$buttonText",
//         backgroundColor: "$buttonPrimary",
//         pressStyle: {
//           backgroundColor: "$buttonPrimaryHover",
//           // shadowColor: "#8eb1b6",
//           // shadowOffset: {
//           //   width: 0,
//           //   height: 1,
//           // },
//           // shadowOpacity: 0.18,
//           // shadowRadius: 1,

//           // elevation: 1,
//         },
//       },
//     },
//     large: {
//       true: {
//         // textProps: {
//         // },
//         paddingVertical: 18,
//         paddingHorizontal: 16,
//       },
//       false: {
//         // textProps: {
//         // },
//         // paddingVertical: 16,
//         // paddingHorizontal: 16,
//       },
//     },
//     round: {
//       true: {
//         borderRadius: "$radius.5",
//       },
//       false: {
//         borderRadius: "$radius.1",
//       },
//     },
//     withIcon: {
//       true: {},
//     },
//     disabled: {
//       true: {
//         opacity: 0.4,
//       },
//     },
//   } as const,
//   defaultVariants: {
//     clear: false,
//     large: false,
//     round: false,
//     withIcon: false,
//   },
//   focusStyle: {
//     shadowColor: "$blueDark2",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//   },

//   fontSize: 16,
//   alignItems: "center",
//   justifyContent: "center",
//   // disabled:
// });

export interface ButtonProps extends TButtonProps {
  children: ReactNode | ReactNode[];
  clear: boolean;
  rounded: boolean;
  withIcon: boolean;
  large: boolean;
}

export const Button = ({
  children,
  clear,
  large,
  rounded,
  withIcon,
  ...props
}: ButtonProps) => {
  return (
    <TButton
      borderRadius={rounded ? "$5" : "$1"}
      alignItems="center"
      justifyContent="center"
      // paddingVertical={large ? 18 : 16}
      paddingHorizontal={16}
      backgroundColor={clear ? "$buttonClear" : "$buttonPrimary"}
      opacity={props.disabled ? 0.4 : 1}
      focusStyle={{
        shadowColor: "#8eb1b6",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
      }}
      color={clear ? "$primaryText" : "$buttonText"}
      pressStyle={{
        backgroundColor: clear ? "$buttonClearHover" : "$buttonPrimaryHover",
      }}
      {...props}
    >
      {children}
    </TButton>
  );
};
