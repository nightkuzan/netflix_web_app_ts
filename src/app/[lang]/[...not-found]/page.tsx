import type { Locale } from "@configs/i18n";

import NotFound from "@/components/NotFound";

const NotFoundPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;

  return <NotFound mode={"light"} />;
};

export default NotFoundPage;
