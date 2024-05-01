import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";

type UseSignupProps = {
  email: string;
  password: string;
};

export const useSignUp = ({ email, password }: UseSignupProps) => {
  const router = useRouter();

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("会員登録ができました！");
          router.push("/");
        })
        .catch((error) => {
          alert("メールアドレスとパスワードを再度ご確認下さい。");
          console.log(error);
        });
    } catch (error) {
      alert("会員登録に失敗しました。");
    }
  };

  return {
    onSignUp,
  };
};
