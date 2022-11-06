import React from "react";
import Post from "../post/Post";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const posts = [
  {
    id: 1,
    title: "Tate",
    text: "is an American-British[4] Internet personality and former professional kickboxer",
    date: "22.04.21",
  },
  {
    id: 2,
    title: "Andew",
    text: "is an Ukrenian Internet personality and former professional kickboxer and passat king",
    date: "22.09.19",
  },
  {
    id: 1,
    title: "Tate",
    text: "is an American-British[4] Internet personality and former professional kickboxer",
    date: "22.04.21",
  },
  {
    id: 2,
    title: "Andew",
    text: "is an Ukrenian Internet personality and former professional kickboxer and passat king",
    date: "22.09.19",
  },
  {
    id: 1,
    title: "Tate",
    text: "is an American-British[4] Internet personality and former professional kickboxer",
    date: "22.04.21",
  },
  {
    id: 2,
    title: "Andew",
    text: "is an Ukrenian Internet personality and former professional kickboxer and passat king",
    date: "22.09.19",
  },
  {
    id: 1,
    title: "Tate",
    text: "is an American-British[4] Internet personality and former professional kickboxer",
    date: "22.04.21",
  },
  {
    id: 2,
    title: "Andew",
    text: "is an Ukrenian Internet personality and former professional kickboxer and passat king",
    date: "22.09.19",
  },
];

const PostList = () => {
  return (
    <Grid container justifyContent="center">
      <Stack spacing={3}>
        {posts.map((post) => (
          <Post data={post} />
        ))}
      </Stack>
    </Grid>
  );
};

export default PostList;
