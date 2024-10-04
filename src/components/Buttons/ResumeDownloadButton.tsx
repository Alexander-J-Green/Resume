import { DocumentDownload } from "@carbon/icons-react"
import ResumePdf from '../../docs/Resume.pdf'
import { useTheme } from "../../styles/ThemeContext";
import CustomButton from "./CustomButton";
import { getIconSizeStyles } from "../../utils/sizeUtils";

interface ResumeDownloadButtonProps {
    size?: 'small' | 'medium';
    margins?: boolean
}

const ResumeDownloadButton: React.FC<ResumeDownloadButtonProps> = ({ size = 'medium', margins }) => {

    const { typography } = useTheme()

    const iconSize = getIconSizeStyles(size === 'medium' ? typography.button.fontSize : typography.smallButton.fontSize)

    return (
        <a href={ResumePdf} download='Alexander-Green-Resume' target='_blank' className={margins ? 'tinyVerticalMargins' : ''}>
            <CustomButton type='secondary' size={size}>
                <DocumentDownload size={iconSize} className='tinyRightMargin' />Download Resume PDF
            </CustomButton>
        </a>
    )
}

export default ResumeDownloadButton