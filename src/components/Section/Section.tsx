import { type FC, type PropsWithChildren } from 'react';

import { cn } from '../../utils/styles';

type Props = PropsWithChildren & {
  className?: string;
};

const Section: FC<Props> = ({ children, className = '' }) => {
  return <section className={cn('section', className)}>{children}</section>;
};

export default Section;
