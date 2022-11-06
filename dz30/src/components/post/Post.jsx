import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Post.css";

export default function Post({ data }) {
  return (
    <Card key={data.id} sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.date}
        </Typography>
        <Typography variant="body2">{data.text}</Typography>
      </CardContent>
    </Card>
  );
}
