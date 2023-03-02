import React from 'react';
import { useMediaQuery } from 'react-responsive'

export const useDevice = () => {

    const isTabletOrPhone = useMediaQuery(
        {query: '(orientation: portrait)'}
      )

    return { isTabletOrPhone }
}
