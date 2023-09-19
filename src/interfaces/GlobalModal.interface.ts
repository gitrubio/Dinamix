export interface GlobalModalProps {
    state: stateModal
    closed: () => void;
    changeState: (section: sectionType) => void;

}
export interface PropsNavBarModal {
    section: sectionType
    changeState: (section: sectionType) => void;
}
export interface stateModal {
    opened: boolean
    section: sectionType
}
export type sectionType = "profile" | "collaborators" | "templates" | "settings" | "import" | "bin"