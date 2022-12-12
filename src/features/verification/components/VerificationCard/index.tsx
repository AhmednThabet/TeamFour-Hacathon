import { Card } from "components";
import type { VerificationCardType } from "../../types";

export const VerificationCard: VerificationCardType = ({
  children,
  className,
  title,
  description,
  caption,
  ...rest
}) => {
  const cardClassName = `w-full max-w-[400px] relative py-8 px-6 min-[440px]:px-12 ${
    className || ""
  }`;

  return (
    <Card {...rest} className={cardClassName}>
      <h1 className="text-xl font-medium tracking-wider text-center">
        {title}
      </h1>
      <div>
        {description && <h6 className="text-base my-4">{description}</h6>}
        {children}
      </div>
      {caption && <p className="text-sm text-center mt-8">{caption}</p>}
    </Card>
  );
};

export default VerificationCard;