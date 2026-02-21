import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { z } from "zod";
import { flattenValidationErrors } from "next-safe-action";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },


  handleServerError(e, utils) {

    const { clientInput, metadata } = utils;

    console.error("[Action Error]", {
        error: e instanceof Error ? e.message : String(e),
        action: metadata?.actionName,
        input: clientInput,
        stack: e instanceof Error ? e.stack : undefined,
    });

    if (e.constructor?.name === "DatabaseError") {
      return "Database error: Your data did not save. Support will be notified.";
    }
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});