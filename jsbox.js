function jsBox(extSrc, apiSrc) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.sandbox = 'allow-scripts'

    var code = `<script>${apiSrc}</script><script>${extSrc}</script>`
    // iframe.src = null
    // iframe.srcdoc = code

    var blob = new Blob([code], { type: 'text/html' })
    var url = URL.createObjectURL(blob)
    iframe.src = url

    document.body.appendChild(iframe)

    return iframe
}