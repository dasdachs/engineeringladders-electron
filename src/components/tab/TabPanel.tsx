interface TabPanelProps {
    children: JSX.Element;
    tab: string;
    selectedTab: string;
}

export function TabPanel({ children, tab, selectedTab }: TabPanelProps) {
    const isSelected = selectedTab === tab;

    return (
        <div
            role="tabpanel"
            hidden={!isSelected}
            id={`tabpanel-${tab}`}
            aria-labelledby={`tab-${tab}`}
        >
            {isSelected && (
                <>
                    { children }
                </>
            )}
        </div>
    );
}