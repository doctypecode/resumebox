"use client"
import styles from "../Template.module.css";
import template from "./ClassicTemplate.module.css";

type ClassicTemplateProps = {
    resume: any;
}

export default function ClassicTemplate({ resume }: ClassicTemplateProps) {
    const { personal, contact, social, skills } = resume;
    return <div className={`${styles.templateWrapper} ${template.templateContainer}`} id="TEMPLATE_CONTAINER">
        <div className={template.header}>
            <h6 className="font-bold" style={{marginBottom:'1mm'}}>{personal.firstName} {personal.lastName}, {personal.designation}</h6>
            <span className="text-sm">{personal.city}, {personal.phoneNumber}, {personal.email}</span>
        </div>

        <section className={template.section}>
            <div className={template.sectionTitle}>
                Links
            </div>
            <div className={template.sectionContent}>
                {
                    social?.map((item, index) => {
                        let output = (
                            <>
                                <a href={item.url} key={item.name}>{item.name}</a>
                                {
                                    index != social.length - 1 ? <span>, </span> : <span></span>
                                }
                            </>
                        )
                        return output;
                    })
                }
            </div>
        </section>

        <section className={template.section}>
            <div className={template.sectionTitle}>Profile</div>
            <div className={template.sectionContent}>{personal.summary}</div>
        </section>

        <section className={template.section}>
            <div className={template.sectionTitle}>Skills</div>
            <div className={template.sectionContent}>
            {
                    skills?.map((skill, index) => {
                        let output = (
                            <>
                                <span>{skill.name}</span>
                                {
                                    index != skills.length - 1 ? <span>, </span> : <span></span>
                                }
                            </>
                        )
                        return output;
                    })
                }
            </div>
        </section>

        <section className={template.section}>
            <div className={template.sectionTitle}>Employment History</div>
            <div className={template.sectionContent}>
            {
                    skills?.map((skill, index) => {
                        let output = (
                            <>
                                <span>{skill.name}</span>
                                {
                                    index != skills.length - 1 ? <span>, </span> : <span></span>
                                }
                            </>
                        )
                        return output;
                    })
                }
            </div>
        </section>
    </div>
}
