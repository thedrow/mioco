(function() {var implementors = {};
implementors['slab'] = ["impl&lt;T, I: <a class='trait' href='slab/trait.Index.html' title='slab::Index'>Index</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='slab/struct.Slab.html' title='slab::Slab'>Slab</a>&lt;T, I&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];implementors['bytes'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/alloc/struct.MemRef.html' title='bytes::alloc::MemRef'>MemRef</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/struct.RingBuf.html' title='bytes::RingBuf'>RingBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/struct.Bytes.html' title='bytes::Bytes'>Bytes</a>",];implementors['spin'] = ["impl&lt;T: 'static + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='spin/struct.RwLock.html' title='spin::RwLock'>RwLock</a>&lt;T&gt;",];implementors['libc'] = [];implementors['mio'] = [];implementors['mioco'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='mioco/sync/mpsc/struct.Receiver.html' title='mioco::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='mioco/timer/struct.Timer.html' title='mioco::timer::Timer'>Timer</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='mioco/struct.MioAdapter.html' title='mioco::MioAdapter'>MioAdapter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='mio/io/trait.Evented.html' title='mio::io::Evented'>Evented</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
