import React from 'react';

import { classNames, parseTextColorClassNames, parseTruncateOption } from '@utils/classname-utils';

export interface TitleProps {
    text: string,
    truncate?: boolean,
    textColor?: string,
}

const Title = ({
    text,
    truncate = false,
    textColor = 'text-gray-600',
}: TitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseTruncateOption(truncate),
            'text-lg font-medium shrink-0'
        ) }
        >
            { text }
        </p>
    );
};

export default Title;