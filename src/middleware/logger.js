import pinoHttp from 'pino-http';

export const logger = pinoHttp(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: "",
      trim: true,
    },
    tag: {
      type: String,
      enum: [
        "Work",
        "Personal",
        "Meeting",
        "Shopping",
        "Ideas",
        "Travel",
        "Finance",
        "Health",
        "Important",
        "Todo",
      ],
      default: "Todo",
    },
  },
  { timestamps: true }
);
