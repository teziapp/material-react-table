import IconButton from '@mui/material/IconButton';
import { type IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { type MRT_TableInstance } from '../types';
import { useState } from 'react';

interface Props<TData extends Record<string, any>> extends IconButtonProps {
  table: MRT_TableInstance<TData>;
}

export const MRT_ToggleFullScreenButton = <TData extends Record<string, any>>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      icons: { FullscreenExitIcon, FullscreenIcon },
      localization,
    },
    setIsFullScreen,
  } = table;
  const { isFullScreen } = getState();

  const [tooltipOpened, setTooltipOpened] = useState(false);

  const handleToggleFullScreen = () => {
    setTooltipOpened(false);
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Tooltip
      open={tooltipOpened}
      arrow
      title={rest?.title ?? localization.toggleFullScreen}
    >
      <IconButton
        aria-label={localization.showHideFilters}
        onClick={handleToggleFullScreen}
        onMouseEnter={() => setTooltipOpened(true)}
        onMouseLeave={() => setTooltipOpened(false)}
        {...rest}
        title={undefined}
      >
        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Tooltip>
  );
};
