import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import n1 from '../images/Posts/n1.jpg'
import n2 from '../images/Posts/n2.jpg'
import n3 from '../images/Posts/n3.jpg'
import n4 from '../images/Posts/n4.jpg'

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [500]);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post img={n1}/>
          <Post img={n2}/>
          <Post img={n3}/>
          <Post img={n4}/>
        </>
      )}
    </Box>
  );
};

export default Feed;
