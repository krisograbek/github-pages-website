import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'

function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#home',
    );

    if (anchor) {
      anchor.scrollIntoView();
    }
    // works too
    // window.scrollTo({ top: 0 })
  };

  return (
    <Zoom in={trigger}>
      <Box
        // alternative and probably more flexible solution
        // onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        component={Link}
        href="#home"
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default ScrollTop;
