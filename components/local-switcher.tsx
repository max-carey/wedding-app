'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  return (
    <Select defaultValue={localActive} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 rounded-full me-2" viewBox="0 0 1900 1000">
              <rect width="1900" height="1000" fill="#fff"/>
              <g fill="#b22234">
                <rect y="0" width="1900" height="77"/>
                <rect y="154" width="1900" height="77"/>
                <rect y="308" width="1900" height="77"/>
                <rect y="462" width="1900" height="77"/>
                <rect y="616" width="1900" height="77"/>
                <rect y="770" width="1900" height="77"/>
                <rect y="924" width="1900" height="76"/>
              </g>
              <rect width="760" height="538" fill="#3c3b6e"/>
              <g fill="#fff">
                <g id="star-row">
                  <g id="star6">
                    <polygon points="30,0 11.76,95.11 95.11,36.18  -35.11,36.18 47.76,95.11"
                            transform="scale(0.1)" />
                  </g>
                </g>
                <g>
                  <g transform="translate(60,45)">
                    <g>
                      <g transform="translate(0,0)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                        <use href="#star6" x="600"/>
                      </g>
                      <g transform="translate(0,108)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                        <use href="#star6" x="600"/>
                      </g>
                      <g transform="translate(0,216)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                        <use href="#star6" x="600"/>
                      </g>
                      <g transform="translate(0,324)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                        <use href="#star6" x="600"/>
                      </g>
                      <g transform="translate(0,432)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                        <use href="#star6" x="600"/>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(120,99)">
                    <g>
                      <g transform="translate(0,0)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                      </g>
                      <g transform="translate(0,108)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                      </g>
                      <g transform="translate(0,216)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                      </g>
                      <g transform="translate(0,324)">
                        <use href="#star6"/>
                        <use href="#star6" x="120"/>
                        <use href="#star6" x="240"/>
                        <use href="#star6" x="360"/>
                        <use href="#star6" x="480"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem value="es">
          <div className="inline-flex items-center">
            <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
              <rect width="213.3" height="480" x="0" y="0" fill="#006341"/>
              <rect width="213.3" height="480" x="213.3" y="0" fill="#fff"/>
              <rect width="213.4" height="480" x="426.7" y="0" fill="#ce1126"/>
              <circle cx="320" cy="240" r="38" fill="#006341" />
            </svg>
            <span>Español</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
