import { prompt } from "enquirer";
import { CombinedConfig } from "../commands/main";

export type MultipleChoiceOptions<T> = {
  [key: string]: T;
};

export abstract class Argument<T> {
  abstract parse(config: CombinedConfig): Promise<T>;
  abstract resolve(config: CombinedConfig): Promise<T>;

  protected async promptForString(question: string, initialValue: string): Promise<string> {
    const answer = await prompt<{ value: string }>({
      type: "input",
      name: "value",
      initial: initialValue,
      message: question,
    });

    const formattedInput = taperDoubleQuotes(answer.value);

    return formattedInput;
  }

  protected async promptForBoolean(question: string): Promise<boolean> {
    const answer = await prompt<{ value: boolean }>({
      type: "confirm",
      name: "value",
      message: question,
    });

    return answer.value;
  }

  protected async promptForMultipleChoice<T>(
    question: string,
    options: MultipleChoiceOptions<T>,
  ): Promise<T> {
    const answer = await prompt<{ value: string }>({
      type: "select",
      name: "value",
      message: question,
      choices: Object.keys(options),
    });

    const selection = answer.value;

    return options[selection];
  }
}

/**
 * Process a strings double quotes in the same way that process.argv appears to.
 * It 'downgrades' their escape-level. Unescaped quotes are removed, and escaped quotes
 * become just quotes.
 */
const taperDoubleQuotes = (input: string): string => {
  // Step 1: Remove all unescaped double-quotes ("). Won't replace (\").
  // Example:
  //
  // "my\"file".txt" -> my\"file.txt
  input = input.replace(/(?<!\\)"/g, "");

  // Step 2: Replace all escaped double-quotes (\") with unescaped double-quotes (").
  // my\"file.txt -> my"file.txt
  return input.replace(/\\"/g, '"');
};
