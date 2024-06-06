export interface SweetAlert {
    title: string,
    text: string,
    icon: "success" | "error" | "warning" | "info",
    iconColor?: string,
    confirmButtonText?: string,
    buttonsStyling?: boolean,
    customClass?: {
        confirmButton?: string,
    },
}
