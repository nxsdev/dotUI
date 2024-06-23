"use client";

import { Checkbox } from "@/lib/components/core/default/checkbox/checkbox";
import { Link } from "@/lib/components/core/default/link";

export default function Demo() {
  return (
    <Checkbox defaultSelected>
      I accept the <Link variant="accent" href="#">terms and conditions</Link>
    </Checkbox>
  );
}
