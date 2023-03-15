import {
  useMobileCode,
  VerificationCard,
  VerifyMobileForm,
} from "features/verification";
import { useCurrentUser } from "features/authentication";
import { useState } from "react";
const RecipientVerfiyCode = ({ url, body, closeModle }: any) => {
  const { user, updateUser } = useCurrentUser();
  const [isVerified, setIsVerified] = useState(user?.verifiedMobile);
  const { sendCodeRequest, loading } = useMobileCode();

  const onVerify = () => {
    if (user) {
      updateUser({ ...user, verifiedMobile: true });
    }
    setIsVerified(true);
    // closeModel();
    // passOnCloseHere
    closeModle(true);
  };
  return (
    <div>
      <VerificationCard
        className="rounded-lg border-transparent shadow-none"
        title="Phone Verification"
        imgSrc="/assets/img/phone.png"
        caption={
          <>
            Didn&apos;t get the code?{" "}
            <a
              onClick={() => sendCodeRequest()}
              className="text-blue-light cursor-pointer"
            >
              {loading ? "Loading..." : "Resend"}
            </a>
          </>
        }
      >
        {
          <>
            <p className="text-sm text-gray-dark mb-4">
              We have sent you a verification code to your phone number
              {user?.mobile}
            </p>
            <VerifyMobileForm
              onVerify={onVerify}
              requestUrl={url}
              requestBody={body}
              codeKey="code"
            />
          </>
        }
      </VerificationCard>
    </div>
  );
};

export default RecipientVerfiyCode;
