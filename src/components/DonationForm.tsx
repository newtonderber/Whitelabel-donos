import {DataCard, DataCardContent} from "@/components/ui/DataCard";
import {submitDonation} from "@/actions/submitDonation";


export default function DonationForm(){
    return(<DataCard>
        <DataCardContent>
            <form className={"md:grid grid-cols-2"} action={submitDonation}>
                <div>
                    <h1 className="text-2xl  font-medium tracking-tight">Angaben zu deiner Spende</h1>
                    <div className="mt-6 flex flex-col gap-3">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Was möchtest du spenden?</legend>
                            <input name="title" type="text" className="input" placeholder="z.B. Milch" />
                            <p>Bitte für jeden verschiedenen Gegenstand eine separate Anfrage stellen.</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Zu welcher Kategorie gehört die Spende?</legend>
                            <select name="category" className="select">
                                <option disabled selected>Kategorie auswählen</option>
                                <option value="KLEIDUNG">Kleidung</option>
                                <option value="LEBENSMITTEL">Lebensmittel</option>
                                <option value="ELEKTRONIK">Elektronik</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">In welchem Zustand befindet sich die Spende?</legend>
                            <select name="condition" className="select">
                                <option disabled selected>Zustand auswählen</option>
                                <option value="NEU">Neu</option>
                                <option value="GEBRAUCHT">Gebraucht</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Wie viel umfasst die Spende?</legend>
                            <input name="amount" type="number" className="input" placeholder="3000" />
                            <p>Mögliche Angaben sind die Anzahl oder das Gewicht in gramm</p>
                        </fieldset>
                    </div>

                </div>
                <div className="mt-6 md:mt-0">
                    <h1 className="text-2xl font-medium tracking-tight">Deine Kontaktdaten</h1>
                    <div className="mt-6 flex flex-col gap-3">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Wie heißt du?</legend>
                            <input name="name" type="text" className="input" placeholder="Name" />
                            <p>optional</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Deine Email</legend>
                            <input name="email" type="email" className="input" placeholder="beispiel@mail.com" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Deine Telefonnummer</legend>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 16 16">
                                    <g fill="none">
                                        <path
                                            d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                                            fill="currentColor"
                                        ></path>
                                    </g>
                                </svg>
                                <input
                                    name={"phone-number"}
                                    type="tel"
                                    className="tabular-nums"
                                    placeholder="0123456789"
                                    pattern="[0-9]*"
                                    minLength={10}
                                    maxLength={10}
                                    title="Must be 10 digits"
                                />
                            </label>
                            <p className="validator-hint">Sollte genau 10 Ziffern sein</p>
                            <p>Wir brauchen mindestens einen Weg, dich zu erreichen</p>
                        </fieldset>
                        <button type="submit" className="btn">Absenden</button>
                    </div>
                </div>

            </form>

        </DataCardContent>
    </DataCard>)
}