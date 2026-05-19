import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";
import { CalendarDays, ChevronDown, Sparkles } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";
import { type Gender } from "../data/cards";

export type FateFormValue = {
  name: string;
  gender: Gender;
  birthday: string;
  isSingle: boolean;
};

type FateFormProps = {
  onSubmit: (value: FateFormValue) => void;
};

const genderLabels: Record<Gender, string> = {
  male: "男生",
  female: "女生",
  other: "不告诉命运",
};

function clampDay(year: number, month: number, day: string) {
  if (!year || !month) return day;
  const maxDay = new Date(year, month, 0).getDate();
  const numericDay = Number(day);
  if (!numericDay) return "";
  return String(Math.min(numericDay, maxDay));
}

export function FateForm({ onSubmit }: FateFormProps) {
  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(() => Array.from({ length: 90 }, (_, index) => currentYear - index), [currentYear]);
  const monthOptions = useMemo(() => Array.from({ length: 12 }, (_, index) => index + 1), []);

  const [gender, setGender] = useState<Gender | "">("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(String(currentYear - 20));
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [isSingle, setIsSingle] = useState("yes");
  const [touched, setTouched] = useState(false);

  const dayOptions = useMemo(() => {
    const maxDay = year && month ? new Date(Number(year), Number(month), 0).getDate() : 31;
    return Array.from({ length: maxDay }, (_, index) => index + 1);
  }, [month, year]);

  const birthday = year && month && day ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}` : "";
  const canSubmit = Boolean(name.trim() && gender && birthday);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (!canSubmit || gender === "") return;

    onSubmit({
      name: name.trim(),
      gender,
      birthday,
      isSingle: isSingle === "yes",
    });
  }

  return (
    <form className="fate-form" onSubmit={handleSubmit}>
      <div className="hero-copy">
        <p className="hero-kicker">520</p>
      </div>

      <div className="glass-panel form-panel">
        <label className="field-label" htmlFor="name">
          姓名
        </label>
        <input
          className="name-input"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="写下你的名字"
          aria-invalid={touched && !name.trim()}
        />

        <label className="field-label" htmlFor="gender-trigger">
          性别
        </label>
        <Select.Root value={gender} onValueChange={(value) => setGender(value as Gender)}>
          <Select.Trigger className="select-trigger" id="gender-trigger" aria-label="选择性别">
            <Select.Value placeholder="请选择性别">
              {gender ? genderLabels[gender] : undefined}
            </Select.Value>
            <Select.Icon>
              <ChevronDown size={16} aria-hidden="true" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="select-content" position="popper" sideOffset={8}>
              <Select.Viewport>
                {(["female", "male", "other"] as Gender[]).map((item) => (
                  <Select.Item className="select-item" key={item} value={item}>
                    <Select.ItemText>{genderLabels[item]}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <label className="field-label">出生年月日</label>
        <div className="birthday-grid" aria-label="出生年月日选择器">
          <div className="birthday-chip birthday-chip--wide">
            <CalendarDays size={16} aria-hidden="true" />
            <span>{birthday || "请选择出生年月日"}</span>
          </div>

          <div className="birthday-row">
            <label className="birthday-field">
              <span>年</span>
              <select value={year} onChange={(event) => setYear(event.target.value)}>
                {yearOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}年
                  </option>
                ))}
              </select>
            </label>
            <label className="birthday-field">
              <span>月</span>
              <select
                value={month}
                onChange={(event) => {
                  const nextMonth = event.target.value;
                  setMonth(nextMonth);
                  setDay((currentDay) => clampDay(Number(year), Number(nextMonth), currentDay));
                }}
              >
                <option value="">月份</option>
                {monthOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}月
                  </option>
                ))}
              </select>
            </label>
            <label className="birthday-field">
              <span>日</span>
              <select value={day} onChange={(event) => setDay(event.target.value)}>
                <option value="">日期</option>
                {dayOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}日
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="field-label">是否单身</div>
        <RadioGroup.Root className="radio-group" value={isSingle} onValueChange={setIsSingle}>
          <RadioGroup.Item className="radio-item" value="yes" id="single-yes">
            <RadioGroup.Indicator className="radio-indicator" />
          </RadioGroup.Item>
          <label htmlFor="single-yes">是，我是单身</label>

          <RadioGroup.Item className="radio-item" value="no" id="single-no">
            <RadioGroup.Indicator className="radio-indicator" />
          </RadioGroup.Item>
          <label htmlFor="single-no">否，我不是单身</label>
        </RadioGroup.Root>

        {touched && !canSubmit ? <p className="form-error">请把姓名、性别和生日填完整。</p> : null}
      </div>

      <button className="primary-button" type="submit">
        开始抽卡
        <Sparkles size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
