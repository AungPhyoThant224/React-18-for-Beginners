import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

let schema = z.object({
  description: z
    .string({ invalid_type_error: "Description is required." })
    .min(1, { message: "Description is required." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "Amount is required." }),
  category: z
    .string({ invalid_type_error: "Category is required." })
    .min(1, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  categories: string[];
  handleAdd: (item: FormData) => void;
}

const ExpenseForm = ({ categories, handleAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    handleAdd(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            onChange={() => console.log()}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={""}></option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
