import { SyntheticEvent, useState } from 'react';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

// import '../../theme/App.sass';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabHead {
  name: string;
  badge?: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function GTabPanel({ children, tabs }: { children: any[]; tabs: TabHead[] }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', height: '100%', justifyContent: 'space-between' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          {tabs?.map(({ name, badge }, index) => (
            <Tab
              label={
                <>
                  <p style={{ margin: '0px' }}>
                    {name}
                    <Badge
                      badgeContent={badge}
                      max={99}
                      color="primary"
                      sx={{ marginLeft: '15px', marginTop: '-5px' }}
                    />
                  </p>
                </>
              }
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </Tabs>
      </Box>
      {children.map((child: any, index: number) => (
        <TabPanel value={value} index={index} key={index}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
}

export default GTabPanel;
