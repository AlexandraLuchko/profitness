import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {

  const bodyParts = [
    {name: 'Arms', muscles: ['Triceps', 'biceps', 'underarm']},
    {name: 'Feet', muscles: ['Quadrum', 'knee-joint', 'ankle']},
    {name: 'Corpus', muscles: ['abdominal muscles', 'lower abdominals', 'obliques']},
    {name: 'Back', muscles: ['latissimus', 'rhomboid muscle', 'trapezius', 'psoas muscle', 'extensor muscle']},
    {name: 'Buttocks', muscles: ['glute max', '	mesogluteus', 'gluteus minimus muscle']},
];

  return (   
    <PopupState variant="popover" popupId="demo-popup-popover">    
      {(popupState) => (        
        <div>
        {bodyParts.map((bodyPart) => (
          <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
              {bodyPart.name}
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
          {bodyPart.muscles.map((muscle) => (
            <Typography sx={{ p: 2 }}>
            {muscle + ' '}
            </Typography>
            ))}
          </Popover>
          </div>
          ))}
          
        </div>
      )}     
    </PopupState>
  );
}
