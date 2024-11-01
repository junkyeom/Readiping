'use client'
import DOMPurify from "dompurify"

export default function CleanedResult({content}) {
    // xss 공격을 막기위해 DOMpurify 사용함
    const cleaned = DOMPurify.sanitize(content)
    return <div dangerouslySetInnerHTML={{ __html: cleaned }} />
}
