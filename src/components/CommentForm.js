import React from "react";
import { useForm } from "react-hook-form";
import {
  FieldErrorMessage,
  useForm,
  TextInput,
  Textarea,
  Button,
  Label,
} from "@adaptavant/eds-core";

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <Box className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <Box as="h2" className="text-2xl font-bold mb-4">
        Leave a Comment 
      </Box>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Box>
          <Label>Comment *</Label>
          <Textarea
            {...register("comment", { required: "Comment is required" })}
            className="w-full"
            rows={4}
          />
          {errors.comment && (
            <FieldErrorMessage>{errors.comment.message}</FieldErrorMessage>
          )}
        </Box>

        <Box>
          <Label>Name *</Label>
          <TextInput
            {...register("name", { required: "Name is required" })}
            className="w-full"
            type="text"
          />
          {errors.name && (
            <FieldErrorMessage>{errors.name.message}</FieldErrorMessage>
          )}
        </Box>

        <Box>
          <Label>Email *</Label>
          <TextInput
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full"
            type="email"
          />
          {errors.email && (
            <FieldErrorMessage>{errors.email.message}</FieldErrorMessage>
          )}
        </Box>

        <Box>
          <Label>Website</Label>
          <TextInput {...register("website")} className="w-full" type="url" />
        </Box>

        <Button type="submit" className="w-full bg-gray-800 text-white py-2">
          POST COMMENT
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm;
